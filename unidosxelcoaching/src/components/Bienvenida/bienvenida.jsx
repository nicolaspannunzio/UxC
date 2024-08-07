import React from "react";
import StylesBienvenida from './bienvenida.module.css';

export const Bienvenida = () => {
    return (
        <div data-aos="zoom-in" className={StylesBienvenida.container}>
            <div className={StylesBienvenida.row}>
                <div className={StylesBienvenida['logo-container']}>
                    <img src="/img/unidos.png" alt="unidos" className={StylesBienvenida['custom-logo']} />
                </div>
                <div className={StylesBienvenida['image-container']}>
                    <img src="/img/bienvenida.png" alt="bienvenida" className={StylesBienvenida['custom-image']} />
                </div>
            </div>
            <div className={StylesBienvenida.row}>
                <div className="col text-center">
                    <p className={StylesBienvenida['welcome-text']}>
                        <strong>Conexión - Comunidad - Crecimiento</strong><br />
                        ¡Bienvenidos a Unidos por el Coaching!<br />
                        Una comunidad que conecta y expande a profesionales<br />
                        del Coaching y el desarrollo humano.
                    </p>
                </div>
            </div>
        </div>
    );
};
