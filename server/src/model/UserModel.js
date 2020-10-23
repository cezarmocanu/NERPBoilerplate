module.exports = (connection, dataTypes) => {
    connection.define('User',
    {
        email: {
            type: dataTypes.STRING(64),
        },
        password: {
            type: dataTypes.STRING(64),
        },
        firstname: {
            type: dataTypes.STRING(64),
            allowNull: true
        },
        lastname: {
            type: dataTypes.STRING(64),
            allowNull: true
        }
    },
    {freezeTableName:true})
};