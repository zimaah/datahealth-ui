export const Node = {
    fields: {
        unique_node_name: {
            label: "Node Name",
            helpMessage: "This is a help message.",
            html_attrs: {
                name: "unique_node_name",
                id: "unique_node_name",
                type: "text",
                placeholder: "Unique Node Name",
                required: true
            },
            validator: function(){
                console.log("validating unique_node_name");
            }
        },
        tendermint_rpc_url: {
            fields: [
                {
                    label: "Tendermint RPC URL",
                    helpMessage: "This is a help message.",
                    html_attrs: {
                        name: "tendermint_rpc_url",
                        id: "tendermint_rpc_url",
                        type: "text",
                        placeholder: "https://192.168.0.1",
                    },
                    validator: function(){
                        console.log("validating tendermint_rpc_url");
                    }
                },
                {
                    label: "Monitor",
                    html_attrs: {
                        name: "tendermint_rpc_url_monitor",
                        id: "tendermint_rpc_url_monitor",
                        type: "checkbox",
                    },
                    validator: function(){
                        console.log("validating tendermint_rpc_url");
                    }
                },
                {
                    label: "TEST",
                    html_attrs: {
                        name: "tendermint_rpc_url_monitor",
                        id: "tendermint_rpc_url_monitor",
                        type: "button",
                    },
                    validator: function(){
                        console.log("validating tendermint_rpc_url");
                    }
                }
            ]
        },
        cosmos_rest_server: {
            fields: [
                {
                    label: "Cosmos Rest Server",
                    helpMessage: "This is a help message.",
                    html_attrs: {
                        name: "cosmos_rest_server",
                        id: "cosmos_rest_server",
                        type: "text",
                        placeholder: "https://192.168.0.1",
                    },
                    validator: function(){
                        console.log("validating cosmos_rest_server");
                    }
                },
                {
                    label: "Monitor",
                    html_attrs: {
                        name: "cosmos_rest_server_monitor",
                        id: "cosmos_rest_server_monitor",
                        type: "checkbox",
                    },
                    validator: function(){
                        console.log("validating cosmos_rest_server");
                    }
                },
                {
                    label: "TEST",
                    html_attrs: {
                        name: "tendermint_rpc_url_monitor",
                        id: "tendermint_rpc_url_monitor",
                        type: "button",
                    },
                    validator: function(){
                        console.log("validating tendermint_rpc_url");
                    }
                }
            ]
        },
        prometheus_endpoint_url: {
            fields: [
                {
                    label: "Prometheus Endpoint URL",
                    helpMessage: "This is a help message.",
                    html_attrs: {
                        name: "prometheus_endpoint_url",
                        id: "prometheus_endpoint_url",
                        type: "text",
                        placeholder: "https://192.168.0.1",
                    },
                    validator: function(){
                        console.log("validating prometheus_endpoint_url");
                    }
                },
                {
                    label: "Monitor",
                    html_attrs: {
                        name: "prometheus_endpoint_url_monitor",
                        id: "prometheus_endpoint_url_monitor",
                        type: "checkbox",
                    },
                    validator: function(){
                        console.log("validating prometheus_endpoint_url");
                    }
                },
                {
                    label: "TEST",
                    html_attrs: {
                        name: "tendermint_rpc_url_monitor",
                        id: "tendermint_rpc_url_monitor",
                        type: "button",
                    },
                    validator: function(){
                        console.log("validating tendermint_rpc_url");
                    }
                }
            ]
        },
        node_options: {
            fields: [
                {
                    label: "Node Is Validator",
                    html_attrs: {
                        name: "node_is_validator",
                        id: "node_is_validator",
                        type: "checkbox",
                    }
                },
                {
                    label: "Is Archive Node",
                    html_attrs: {
                        name: "node_is_validator",
                        id: "node_is_validator",
                        type: "checkbox",
                    }
                },
                {
                    label: "Monitor Node",
                    html_attrs: {
                        name: "node_is_validator",
                        id: "node_is_validator",
                        type: "checkbox",
                    }
                },
                {
                    label: "Use As Data Source",
                    html_attrs: {
                        name: "node_is_validator",
                        id: "node_is_validator",
                        type: "checkbox",
                    }
                }
            ]
        }
    }
}