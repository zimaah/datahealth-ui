export const Module = { 
    fields: {
        name: {
            label: "Name",
            helpMessage: "This is a help message.",
            html_attrs: {
                name: "unique_sub_chain_name",
                id: "unique_sub_chain_name",
                type: "text",
                placeholder: "i.e. Patience Acquisition",
                required: true
            },
            validator: function(){
                console.log("validating unique_sub_chain_name");
            }
        },
        
        user: {
            label: "User That Has Access To The Module",
            helpMessage: "The user that you just created in the previous step.",
            html_attrs: {
                name: "unique_sub_chain_name",
                id: "unique_sub_chain_name",
                type: "text",
                disabled: true,
                value: "user@email.com"
            },
            validator: function(){
                console.log("validating unique_sub_chain_name");
            }
        }
    }
}