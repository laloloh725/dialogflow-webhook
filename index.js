const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const intentName = req.body.queryResult.intent.displayName;

    let responseText = '';

    switch(intentName) {
        case 'Saludo':
            responseText = '¡Hola! Bienvenido a Ergosolar. ¿En qué puedo ayudarte hoy?';
            break;
        case 'Problemas_inversor':
            responseText = 'Entiendo que tienes problemas con el inversor. ¿Podrías especificar el tipo de problema que estás experimentando?';
            break;
        case 'Consulta_monitoreo':
            responseText = 'Parece que tienes problemas con el sistema de monitoreo. ¿Podrías describir el problema con más detalle?';
            break;
        case 'Info_mantenimiento':
            responseText = 'Ofrecemos servicios de mantenimiento preventivo y correctivo. ¿Cuál te gustaría conocer en detalle?';
            break;
        case 'Solicitar_asistencia':
            responseText = 'Para asistencia técnica, por favor proporciona más detalles sobre tu problema. Un miembro de nuestro equipo se pondrá en contacto contigo pronto.';
            break;
        case 'Agradecimiento':
            responseText = '¡De nada! Estamos aquí para ayudarte.';
            break;
        case 'Despedida':
            responseText = '¡Adiós! Que tengas un excelente día.';
            break;
        default:
            responseText = 'Lo siento, no entendí tu solicitud. ¿Puedes repetirlo de otra manera?';
    }

    res.json({
        fulfillmentText: responseText
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
