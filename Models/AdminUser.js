module.exports = (sequelize, DataTypes) => {
    const AdminUser = sequelize.define('AdminUser', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
       MobileNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true

      },
    }, 
    {
      tableName: 'AdminUsers',
      timestamps: false,
    });
  
    return AdminUser;
  };
  

  