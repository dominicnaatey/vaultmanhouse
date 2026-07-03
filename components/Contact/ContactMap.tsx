'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

type HereCoordinate = {
  lat: number;
  lng: number;
};

type HereViewPort = {
  resize: () => void;
};

type HereMapInstance = {
  addObject: (object: unknown) => void;
  dispose: () => void;
  getViewPort: () => HereViewPort;
};

type HereDefaultLayers = {
  vector: {
    normal: {
      map: unknown;
    };
  };
};

type HerePlatform = {
  createDefaultLayers: () => HereDefaultLayers;
};

type HereGlobal = {
  service: {
    Platform: new (options: { apikey: string }) => HerePlatform;
  };
  Map: new (
    element: HTMLElement,
    layer: unknown,
    options: {
      zoom: number;
      center: HereCoordinate;
      pixelRatio?: number;
    }
  ) => HereMapInstance;
  map: {
    Marker: new (coords: HereCoordinate) => unknown;
  };
  mapevents: {
    MapEvents: new (map: HereMapInstance) => unknown;
    Behavior: new (events: unknown) => unknown;
  };
  ui: {
    UI: {
      createDefault: (map: HereMapInstance, layers: HereDefaultLayers) => unknown;
    };
  };
};

declare global {
  interface Window {
    H?: HereGlobal;
  }
}

const HERE_MAPS_API_KEY = process.env.NEXT_PUBLIC_HERE_MAPS_API_KEY;
const VAULTMAN_HOUSE_LOCATION: HereCoordinate = {
  lat: 5.6698,
  lng: -0.0166,
};

export default function ContactMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<HereMapInstance | null>(null);
  const [isSdkReady, setIsSdkReady] = useState(false);
  const [hasScriptError, setHasScriptError] = useState(false);

  useEffect(() => {
    if (!HERE_MAPS_API_KEY || !isSdkReady || !mapContainerRef.current || mapRef.current) {
      return;
    }

    const H = window.H;

    if (!H) {
      return;
    }

    const platform = new H.service.Platform({
      apikey: HERE_MAPS_API_KEY,
    });
    const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(mapContainerRef.current, defaultLayers.vector.normal.map, {
      center: VAULTMAN_HOUSE_LOCATION,
      zoom: 15,
      pixelRatio: window.devicePixelRatio || 1,
    });

    map.addObject(new H.map.Marker(VAULTMAN_HOUSE_LOCATION));
    new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    H.ui.UI.createDefault(map, defaultLayers);

    const handleResize = () => {
      map.getViewPort().resize();
    };

    window.addEventListener('resize', handleResize);
    mapRef.current = map;

    return () => {
      window.removeEventListener('resize', handleResize);
      map.dispose();
      mapRef.current = null;
    };
  }, [isSdkReady]);

  const showFallbackState = !HERE_MAPS_API_KEY || hasScriptError;

  return (
    <section className="mt-24 md:mt-36">
      {HERE_MAPS_API_KEY ? (
        <>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://js.api.here.com/v3/3.2/mapsjs-ui.css"
          />
          <Script src="https://js.api.here.com/v3/3.2/mapsjs-core.js" strategy="afterInteractive" />
          <Script
            src="https://js.api.here.com/v3/3.2/mapsjs-service.js"
            strategy="afterInteractive"
          />
          <Script
            src="https://js.api.here.com/v3/3.2/mapsjs-mapevents.js"
            strategy="afterInteractive"
          />
          <Script
            src="https://js.api.here.com/v3/3.2/mapsjs-ui.js"
            strategy="afterInteractive"
            onReady={() => setIsSdkReady(true)}
            onError={() => setHasScriptError(true)}
          />
        </>
      ) : null}

      <div className="relative overflow-hidden rounded-4xl border border-[#2D2926]/8 bg-white shadow-[0_16px_45px_rgba(45,41,38,0.06)]">
        {showFallbackState ? (
          <div className="flex h-75 flex-col justify-center bg-[#F0ECE2] px-8 text-[#2D2926] md:h-95 md:px-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#59644D]">
              / Map Setup /
            </p>
            <h2 className="mt-5 max-w-md font-hero text-3xl leading-tight md:text-[2.5rem]">
              Connect HERE Maps to display the Vaultman House location.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#2D2926]/68 md:text-base">
              Add `NEXT_PUBLIC_HERE_MAPS_API_KEY` to your local `.env` file to enable the
              interactive map for No.7 Zeus Street, Otu Adzin Road Spintex - Kotobabi,
              Tema - Accra.
            </p>
          </div>
        ) : (
          <>
            {!isSdkReady ? (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#F5F3EE]/90 px-6 text-center text-sm font-medium text-[#2D2926]/72">
                Loading Vaultman House map...
              </div>
            ) : null}
            <div
              ref={mapContainerRef}
              className="h-75 w-full md:h-95"
              aria-label="Vaultman House location map"
            />
          </>
        )}
      </div>
    </section>
  );
}
