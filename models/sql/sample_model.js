module.exports = (sequelize, DataTypes) => {
	const WaVirtualAccount = sequelize.define(
		'WaVirtualAccount', 
		{
			virtual_acc_id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			virtual_acc_number: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			virtual_acc_handle: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			virtual_acc_qr: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			escrow_acc: {
				type: DataTypes.STRING,
			},
			virtual_acc_bank_reference: {
				type: DataTypes.STRING,
			},
			currency: {
				type: DataTypes.STRING
			},
			locked_balance: {
				type: DataTypes.DOUBLE,
			},
			avaliable_balance: {
				type: DataTypes.DOUBLE,
			},
			ledger_balance: {
				type: DataTypes.DOUBLE,
			},
			kudos: {
				type: DataTypes.DOUBLE,
			},
			beneficiary_entity_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			beneficiary_entity_type: {
				type: DataTypes.STRING,
				allowNull: false
			},
			beneficiary_iban: {
				type: DataTypes.STRING,
			},
			virtual_pin: {
				type: DataTypes.STRING,
                allowNull: false,
            },
			is_active: {
				type: DataTypes.TINYINT,
            },
            meta: {
                type : DataTypes.TEXT,
                get : function (){
                    return this.getDataValue('value') ? JSON.parse(this.getDataValue('value')): null
                },
                set : function(value){
                    this.setDataValue('value',JSON.stringify(value))
                }
            },
			created_at: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
			},
			updated_at: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
			},
		}, {
			timestamps: false,
			tableName: 'wa_virtual_account',
			underscored: true,
		},
	);
 
	WaVirtualAccount.associate = function (models) {
	};
  
	return WaVirtualAccount;

};

//How to use sequelize models
//const virtual_account = await db.WaVirtualAccount.findOne({ raw: true, where: { beneficiary_entity_id: entity_id, beneficiary_entity_type: entity_type, is_active: 1 } });
