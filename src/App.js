// import React from "react";
import Logo from "./components/Logo";
import PaintingList from "./components/PaintingList";
import Panel from "./components/Panel";
import paintings from "./paintings.json";


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];


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