import React from "react";

import type { Component as ComponentType } from "@/utility/types/play/component.type";
import OnclickHandler from "@/utility/handlers/play/onclick-component.handler";

type Props = {
    section: ComponentType
    styles: any;
    set: (component: ComponentType) => void;
};

class Component extends React.Component<Props> {
    private onclickHandler: OnclickHandler;

    constructor(props: Props) {
        super(props);

        this.onclickHandler = new OnclickHandler(props.set, props.styles);
    };

    private readonly rules = () => {
        return (
            <section id={this.props.styles.section_component} className={this.props.styles.component}>
                <div className={this.props.styles.child}>
                    <ul>
                        <li>Количество человек: от двух</li>
                        <li>Начало игры: Какой-либо из людей начинает ход, загадывая любое слово</li>
                        <li>Слово должно являться: Существительным именительного падежа в единственном числе любого склонения и любого рода</li>
                        <li>ИСКЛЮЧЕНИЕ: Если данного слова нет в единственном числе, то можно написать во множественном числе</li>
                        <li>После того, как первый человек назвал свое слово, нужно посмотреть на какую букву оно заканчиваться</li>
                        <li>Когда мы узнали последюю букву, следующий человек (По договоренности группы людей) говорит свое слово, которое обязано начинаться на последнюю букву прошлого слов</li>
                        <li>ГЛАВНОЕ, чтобы слова не повторялись, иначе это не будет защитано, как ответ. КАЖДОЕ слово должно быть УНИКАЛЬНЫМ</li>
                        <li>ЕСЛИ последняя буква это: Ь, Ъ или Ы, ТО нужно выбрать предпоследнюю букву</li>
                        <li>ЕСЛИ вы не можете придумать слова на последнюю буквы, вы ОБЯЗАНЫ спросить у группы людей/человека, играющих с вами поменять букву на предпоследнюю</li>
                        <li>Игра расчитано на веселую и долгую игру, выбыть нельзя, если вы еще можете придумывать слова</li>
                    </ul>
                </div>

                <div className={`${this.props.styles.content} ${this.props.styles.child}`}>
                    <button onClick={(e) => this.onclickHandler.Handler(e, 'nothing')}>
                        <span>Закрыть</span>
                    </button>
                </div>
            </section>
        );
    };;

    public readonly render = () => {
        return this.props.section === 'rules'
            ? this.rules()
            : <></>;
    };
};

export default Component;