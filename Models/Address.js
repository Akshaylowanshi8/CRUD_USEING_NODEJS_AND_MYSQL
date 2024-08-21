module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
     
      Parmanent_Address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     Local_Address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      StudentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    }, 
    {
      tableName: 'Address',
      timestamps: false,
    });
  
    return Address;
  };
  

  