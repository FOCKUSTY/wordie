import React from "react";

import UserComponent from "@/ui/user.components";

import OnclickHandler from "@/utility/handlers/play/onclick-start.handler";
import SendHandler from "@/utility/handlers/play/send.handler";

import type { User } from "@/utility/types/user.types";
import type { Reply } from "@/utility/types/play/reply.type";

type Props = {
    set: (game: boolean) => void;
    styles: any;
    game: boolean;
    user: User;

    replies: Reply[];
    setReplies: (replies: Reply[]) => void;
    setter: (replies: Reply[]) => void;
};

class Component extends React.Component<Props> {
    private readonly onclickHandler: OnclickHandler;
    private readonly sendHandler: SendHandler;

    constructor(props: Props) {
        super(props);

        this.sendHandler = new SendHandler(props.setter, props.user, props.replies);
        this.onclickHandler = new OnclickHandler(props.styles, props.replies, props.user, props.set, props.setter);
    };

    public componentDidMount (): void {
        document.addEventListener('keydown', (e) => {
            if(e.key !== 'Enter')
                return;

            if(e.shiftKey)
                this.sendHandler.Send(document);
        });
    };

    private readonly GameStart = () => {
        return (
            <div className={this.props.styles.start_game} id={this.props.styles.start_game_component}>
                <UserComponent styles={this.props.styles} user={this.props.user}></UserComponent>
                
                <div className={this.props.styles.buttons}>
                    <button onClick={(e) => this.onclickHandler.Handler(e)}>
                        <span>Начать игру</span>
                    </button>
                </div>
            </div>
        );
    };

    private readonly Game = () => {
        return (
            <div className={this.props.styles.game}>
                <div id={this.props.styles.output}>
                    <div className={this.props.styles.output_section}>
                        <span>Вывод игры:</span>
                        <div id={this.props.styles.game_output} className={this.props.styles.text}>
                            {
                                this.props.replies.map(reply => 
                                    reply.type === 'game'
                                    ? <div><span>{reply.name}:</span><span>{reply.text}</span></div>
                                    : <></>
                                )
                            }
                        </div>
                    </div>
                    <div className={this.props.styles.output_section}>
                        <span>История:</span>
                        <div id={this.props.styles.bot_output} className={this.props.styles.text}>
                            {
                                this.props.replies.map(reply => reply.type === 'bot'
                                    ? <div><span>{reply.name}:</span><span>{reply.text.split('').map((_v, i) =>
                                        i === 0
                                            ? reply.text.split('')[0].toLocaleUpperCase()
                                            : reply.text[i]).join('')}
                                            </span></div>
                                    : <></>
                                )
                            }
                        </div>
                    </div>
                </div>

                <form name="form_send" id={this.props.styles.form_send}>
                    <fieldset className={this.props.styles.input}>
                        <legend>Напишите своё сообщение</legend>

                        <textarea
                            minLength={2}
                            maxLength={30}
                            placeholder="Ваше сообщение"
                            id={this.props.styles.write}
                            name="word"
                            onInput={(e) =>
                                e.currentTarget.value = e.currentTarget.value.replace('\n', '').replace(' ', '')}
                        ></textarea>

                        <input
                            id={this.props.styles.send_writed}
                            name="submit"
                            type="submit"
                            value="Отправить"
                            onClick={this.sendHandler.Handler}
                        />
                    </fieldset>
                </form>
            </div>
        );
    };

    public readonly render = (): React.ReactNode => {
        return this.props.game
            ? this.Game()
            : this.GameStart();
    };
};

export default Component;