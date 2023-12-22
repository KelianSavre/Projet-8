import { useState } from "react";


function Collapse({title, content}){

    const [isOpen, itemIsOpen] = useState(false)

    /*Initialisation de l'etat a false pour que le collapse soit ferme */

    function openDisplay(){
    itemIsOpen(!isOpen)
    }



    return (
        <div>
            <div className="collapse-active_container">
                <h2 className="collapse-active_title">{title}</h2>
                <p className="collapse-active_icon" onClick={openDisplay}>
                    {isOpen ? (
                        <i className="fa-solid fa-chevron-down"></i>
                    ) : (
                        <i className="fa-solid fa-chevron-up"></i>
                    )}
                </p>
            </div>
            <div className="collapse-active_content">
                {isOpen && <p>{content}</p>}
            </div>
            
        </div>
    )


}



export default Collapse