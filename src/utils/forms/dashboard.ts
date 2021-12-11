export const Dashboard = { 
    fields: {
        name: {
            label: "Name",
            helpMessage: "This is a help message.",
            html_attrs: {
                name: "unique_sub_chain_name",
                id: "unique_sub_chain_name",
                type: "text",
                placeholder: "i.e. Dashboard Patience Acquisition",
                required: true
            },
            validator: function(){
                console.log("validating unique_sub_chain_name");
            }
        },
        
        user: {
            label: "Module (Associated With It)",
            helpMessage: "The module that you created in the first step",
            html_attrs: {
                name: "unique_sub_chain_name",
                id: "unique_sub_chain_name",
                type: "text",
                disabled: true,
                value: "Module Patience Acquisition"
            },
            validator: function(){
                console.log("validating unique_sub_chain_name");
            }
        }
    }
}