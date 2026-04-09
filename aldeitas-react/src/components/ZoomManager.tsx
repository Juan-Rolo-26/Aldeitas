

import { useEffect } from 'react'

export function ZoomManager() {
    useEffect(() => {
        // Forzamos el zoom al 100% en navegadores que soportan la propiedad zoom (Chrome/Safari/Edge)
        const forceZoom = () => {
            if (typeof document !== 'undefined' && (document.documentElement as any).style) {
                (document.documentElement as any).style.zoom = "100%";
            }
        };

        forceZoom();

        // También nos aseguramos de que transform scale sea 1 en caso de que alguien lo esté forzando
        if (typeof document !== 'undefined') {
            document.documentElement.style.setProperty('--zoom-scale', '1');
        }
    }, [])

    return null
}
