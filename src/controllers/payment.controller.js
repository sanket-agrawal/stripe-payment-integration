export const createCheckoutController = async (req, res) => {
    try {

    } catch (ex) {
        console.error(ex);
        res.status(400).json({
            message : "Internal Server Error"
        })
    }
}

export const webHookController = async (req, res) => {
try{

}catch(ex){
    console.error(ex);
        res.status(400).json({
            message : "Internal Server Error"
        })
}
}