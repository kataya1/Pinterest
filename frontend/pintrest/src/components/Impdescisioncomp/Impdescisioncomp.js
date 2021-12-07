import { Textbutton } from "Textbutton/Textbutton";

export default function Importsettings({ title, descripiton, buttonText}){
    vr = "Convert account"

    return(
        <>
            <h2>{title}</h2>
            <p>{descripiton}</p>
            <Textbutton text={vr} onClick={}>
                {buttonText}
            </Textbutton>

        </>
    )

}