export async function enviarCorreo(data) {

    const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}