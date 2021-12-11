export const Query = { 
    fields: {
        severities: {
            label: "Filters Available For The Above Query",
            helpMessage: "This is a help message.",
            is_multiple: true,
            html_attrs: {
                type: "checkbox"
            },
            inputs: [
                {
                    label: "NM_PACIENTE (Pacient's name)",
                    html_attrs: {
                        value: "1",
                        type: "checkbox",
                        name: "severity_info"
                    }
                },
                {
                    label: "CD_PACIENTE (Pacient's ID)",
                    html_attrs: {
                        value: "1",
                        type: "checkbox",
                        name: "severity_info"
                    }
                },
                {
                    label: "DT_CADASTRO (Pacient's Date Of Registration)",
                    html_attrs: {
                        value: "1",
                        type: "checkbox",
                        name: "severity_info"
                    }
                },
            ],
            validator: function(){
                console.log("validating unique_node_name");
            }
        },
    }
}