import React from "react";
import { IFeatures } from "../../interfaces/IFeatures";
import "./Features.scss";

const Features = ({ features }: { features: IFeatures }) => {
    const { diagonal, platform, memory } = features;

    return (
        <div className="features">
            <div className="features__block">
                <h3 className="features__title">Характеристики</h3>
                <ul className="features__list">
                    <li className="features__feature">
                        <p className="features__feature-text">
                            <span>Платформа:</span> <span className="features__dots-line"></span>
                            <span>{platform}</span>
                        </p>
                    </li>
                    <li className="features__feature">
                        {diagonal ? <p className="features__feature-text">
                            <span>Диагональ:</span> <span className="features__dots-line"></span>
                            <span>{diagonal}</span>
                        </p> : null}
                    </li>
                    <li className="features__feature">
                        {memory ? <p className="features__feature-text">
                            <span>Объем памяти:</span> <span className="features__dots-line"></span>
                            <span>{memory}</span>
                        </p> : null}
                    </li>
                </ul>
            </div>
            <div className="features__block">
                <h3 className="features__title">Описание</h3>
                <p className="features__feature-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, doloremque voluptate perferendis
                    dolore nesciunt quos atque quo quasi excepturi enim porro vitae libero at adipisci odit delectus!
                    Quae, doloribus eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                    doloremque voluptate perferendis dolore nesciunt quos atque quo quasi excepturi enim porro vitae
                    libero at adipisci odit delectus! Quae, doloribus eveniet.
                </p>
            </div>
        </div>
    );
};

export default Features;
