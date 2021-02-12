import React from "react";
import Logo from "./components/Logo";
import PaintingList from "./components/PaintingList";
import Panel from "./components/Panel";
import paintings from "./paintings.json";


const App = () => {
    return (
        <div>
            <Panel title="Последние новости" >
                <p>dksdkjskdjskdjsdksjdksjdskdjskjdskjdskjdskjdskdjskjdskdjsdskdjsk
                   dksjdksjdskjdskjdskjdskjskjdksjdksjdksjdksjdskjdskjdskdjskdjskdjjdks
                   sdksjdksjdksjdskjdskjdskdjskjdksjdksjdksjdskjdskjdksjdskdjskdksdskj
                   dksjdksjdksjdjsdskdsjdsdskdksjkjdskdjskjdskjskssjdksjdkskdskdskdjsdks
                </p>
                <a href="">Читать...</a>
            </Panel>

            <Panel>
                <p>Пока</p>
                <p>dksdkjskdjskdjsdksjdksjdskdjskjdskjdskjdskjdskdjskjdskdjsdskdjsk
                 dksjdksjdskjdskjdskjdskjskjdksjdksjdksjdksjdskjdskjdskdjskdjskdjjdks
                    sdksjdksjdksjdskjdskjdskdjskjdksjdksjdksjdskjdskjdksjdskdjskdksdskj
                    dksjdksjdksjdjsdskdsjdsdskdksjkjdskdjskjdskjskssjdksjdkskdskdskdjsdks
                </p>
            </Panel>

            <Logo text="Главный компонент-контейнер 
            приложения" />
            <PaintingList paintings={paintings} />
        </div>
    );
};

export default App;