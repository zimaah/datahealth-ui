import { h } from '@stencil/core';

/**
 * When a ticked `checkbox` is submitted as part of a form data, the browser parses the value as the string "on" instead of `true`.
 * When a non-ticked `checkbox` is submitted, then its entry isn't set as part of the data contained in the {@link FormData} object.
 * 
 * This function adds some logic for getting the value from a checkbox, ensuring that it will be either `true` for ticked checkboxes and `false` for non-ticked.
 * 
 * @param formObj `Object` containing the data submitted within the form in key/value pairs.
 * @param checkboxInputName the HTML `name` attribute of the given checkbox.
 * @returns `true` if the checkbox has been ticked. Otherwise, `false`.
 */
export function getCheckboxValue(formObj: any, checkboxInputName: string): boolean {
    const value = formObj[checkboxInputName] ? formObj[checkboxInputName] === "on" : false;

    return value;
}

export function getInputJSX(formObj: any, field: any){
    const fieldObj: any = formObj.fields[field];
    const isMultiple = fieldObj.is_multiple;
    const tagName = fieldObj.component;

    return (
      <div class={"form__container-input"}>
        <label class={"form__label invisible"}>{fieldObj.label}</label>
        
        {/* Single Inputs: text, text-area */}
        {
          !isMultiple && !tagName && !fieldObj.fields &&
          // "value" is necessary for when editing the entry (retrieving previous saved values)
          <input {...fieldObj.html_attrs} class={"invisible"} />
        }

        {/* Multiple Inputs: checkbox & radio */}
        {
          isMultiple && !tagName &&
          fieldObj.inputs &&
          fieldObj.inputs.map((input: any) => {
            return (
              <div class={"form__container-multiple-inputs"}>
                <label>{input.label}</label>
                <input {...input.html_attrs} />
              </div>
            )
          })
        }

        {/* CUSTOM COMPONENT / TAG-NAME */}
        {
          tagName &&
          h(tagName, {...fieldObj.html_attrs, ...fieldObj.componentProps})
        }

        {/* TWO FIELDS INLINE */}
        {
          fieldObj.fields &&
          <div style={{display: "flex"}}>
            {
              fieldObj.fields.map((input) => {
                return (
                  <div class={"form__container-multiple-inputs"}>
                    {
                      input.html_attrs.type !== "button" &&
                      <label>{input.label}</label>
                    }
                    <input {...input.html_attrs} value={input.label} />
                  </div>
                )
              })
            }
          </div>
        }

        <i class={"form__help-message"}>{fieldObj.helpMessage}</i>
      </div>
    )
  }