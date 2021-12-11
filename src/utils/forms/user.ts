export const User = { 
    fields: {
        email: {
            label: "E-mail",
            helpMessage: "This is a help message.",
            html_attrs: {
                name: "unique_sub_chain_name",
                id: "unique_sub_chain_name",
                type: "text",
                placeholder: "E-mail used to login",
                required: true
            },
            validator: function(){
                console.log("validating unique_sub_chain_name");
            }
        },
        
        password: {
            label: "Password",
            helpMessage: "This is a help message.",
            html_attrs: {
                name: "unique_sub_chain_name",
                id: "unique_sub_chain_name",
                type: "password",
                placeholder: "Type a strong password",
                required: true
            },
            validator: function(){
                console.log("validating unique_sub_chain_name");
            }
        }
    }
}