export const Repository = {
    fields: {
        unique_node_name: {
            label: "Repo Name",
            helpMessage: "This is a help message.",
            html_attrs: {
                name: "repo_name",
                id: "repo_name",
                type: "text",
                placeholder: "repo_name",
                required: true
            },
            validator: function(){
                console.log("validating unique_node_name");
            }
        },
    }
}