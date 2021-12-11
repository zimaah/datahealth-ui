const TelegramChannel = {
    telegram_bot_name: {
        label: "Bot Name",
        helpMessage: "This is a help message.",
        html_attrs: {
            name: "telegram_bot_name",
            id: "telegram_bot_name",
            type: "text",
            placeholder: "telegram_bot_name",
            required: true
        },
        validator: function(){
            console.log("validating telegram_bot_name");
        }
    },
    bot_token: {
        label: "Bot Token",
        helpMessage: "This is a help message.",
        html_attrs: {
            name: "telegram_bot_token",
            id: "telegram_bot_token",
            type: "text",
            placeholder: "telegram_bot_token",
            required: true
        },
        validator: function(){
            console.log("validating telegram_bot_token");
        }
    },
    chat_id: {
        label: "Chat ID",
        helpMessage: "This is a help message.",
        html_attrs: {
            name: "chat_id",
            id: "telegram_bot_name",
            type: "text",
            placeholder: "chat_id",
            required: true
        },
        validator: function(){
            console.log("validating telegram_bot_name");
        }
    },
    severities: {
        label: "Severities",
        helpMessage: "This is a help message.",
        is_multiple: true,
        html_attrs: {
            type: "checkbox"
        },
        inputs: [
            {
                label: "Info",
                html_attrs: {
                    value: "1",
                    type: "checkbox",
                    name: "severity_info"
                }
            },
            {
                label: "Warning",
                html_attrs: {
                    value: "2",
                    type: "checkbox",
                    name: "severity_warning"
                }
            },
            {
                label: "Critical",
                html_attrs: {
                    value: "3",
                    type: "checkbox",
                    name: "severity_critical"
                }
            },
            {
                label: "Error",
                html_attrs: {
                    value: "4",
                    type: "checkbox",
                    name: "severity_error"
                }
            },
        ],
        validator: function(){
            console.log("validating unique_node_name");
        }
    },
    commands: {
        label: "Telegram Commands",
        html_attrs: {
            name: "commands",
            type: "checkbox",
            checked: true
        }
    },
    alerts: {
        label: "Telegram Alerts",
        html_attrs: {
            name: "alerts",
            type: "checkbox",
            checked: true
        }
    }
}

const EmailChannel = {
    email: {
        label: "E-mail",
        helpMessage: "This is a help message.",
        html_attrs: {
            name: "email",
            id: "email",
            type: "e-mail",
            placeholder: "Type your e-mail here",
            required: true
        },
        validator: function(){
            console.log("validating telegram_bot_name");
        }
    },
    smtp: {
        label: "SMTP",
        helpMessage: "This is a help message.",
        html_attrs: {
            name: "smtp",
            id: "smtp",
            type: "url",
            placeholder: "SMTP server address",
            required: true
        },
        validator: function(){
            console.log("validating telegram_bot_name");
        }
    },
}

export const Channels = {
    fields: {
        channel_category: {
            helpMessage: "This is a help message.",
            component: "svc-select",
            componentProps: {
                header: "Select Channel Category",
                options: [
                    {
                        value: "telegram",
                        label: "Telegram"
                    },
                    {
                        value: "email",
                        label: "E-mail"
                    },
                    {
                        value: "twilio",
                        label: "Twilio"
                    }
                ],
                onIonChange: function(e: any){
                    window.dispatchEvent(new CustomEvent("CHANNEL_CATEGORY_CHANGED", { detail: e.detail.value, bubbles: true }))
                }
            },
            html_attrs: {
                name: "channel_category",
                id: "channel_category",
                placeholder: "Channel Category",
                required: true
            },
            validator: function(){
                console.log("validating unique_sub_chain_name");
            }
        },
        getMoreFields: function(fieldName: string){
            switch (fieldName) {
                case "telegram": 
                    return {fields: TelegramChannel};
                case "email":
                    return {fields: EmailChannel};
            }
        }
    }
}