export const createCheckoutController = async (req, res) => {
    try {

    } catch (ex) {
        console.error(ex);
        res.status(400).json({
            message : "Internal Server Error"
        })
    }
}

async function fullFillCheckoutOrder(){
    try {
        
    } catch (error) {
        console.error(error);
        throw error;
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