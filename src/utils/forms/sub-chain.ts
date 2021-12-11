export const SubChain = {
    fields: {
        base_chain: {
            helpMessage: "This is a help message.",
            component: "svc-select",
            componentProps: {
                header: "Select Base-Chain",
                options: [
                    {
                        value: 1,
                        label: "Cosmos"
                    },
                    {
                        value: 2,
                        label: "Substrate"
                    },
                    {
                        value: 3,
                        label: "ChainLink"
                    },
                    {
                        value: 4,
                        label: "General"
                    },
                ]  
            },
            html_attrs: {
                name: "base_chain",
                id: "base_chain",
                placeholder: "Base Chain",
                required: true
            },
            validator: function(){
                console.log("validating unique_sub_chain_name");
            }
        },

        unique_sub_chain_name: {
            label: "Unique Sub Chain Name",
            helpMessage: "This is a help message.",
            html_attrs: {
                name: "unique_sub_chain_name",
                id: "unique_sub_chain_name",
                type: "text",
                placeholder: "Unique Node Name",
                required: true
            },
            validator: function(){
                console.log("validating unique_sub_chain_name");
            }
        }
    }
}