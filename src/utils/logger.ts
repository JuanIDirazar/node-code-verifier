export const LogInfo = (message:string) => {
    console.log(`Info: \x1b[34m${message}\x1b[0m`);  
}
export const LogSuccess = (message:string) => {
    console.log(`Success: \x1b[32m${message}\x1b[0m`);  
} 
export const LogError = (message:string) => {
    console.log(`Error: \x1b[31m${message}\x1b[0m`);  
}
export const LogWarning = (message:string) => {
    console.log(`Warning: \x1b[33m${message}\x1b[0m`);  
}