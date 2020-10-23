module.exports = (connection, dataTypes) => {
    connection.define('House',
    {
        address: {
            type: dataTypes.STRING(80),
            allowNull: true
        },
        city: {
            type: dataTypes.STRING(80),
            allowNull: true
        },
        surface:{
            type: dataTypes.FLOAT,
            allowNull: true
        },
        levels:{
            type: dataTypes.STRING,
            allowNull: true
        }
    },
    {freezeTableName:true})
};