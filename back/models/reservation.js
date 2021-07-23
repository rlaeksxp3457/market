module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define("Reservation", {
        reservation_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        current_state: {
            type: DataTypes.STRING(20),
            allowNull: false,
            comment: "예약상태",

        },
        order_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "예약개수"
        },
    }, {
        sequelize,
        timestamps: true,               // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
        paranoid: true,                 // delete_at 컬럼 삭제된 시간 자동적용
        underscored: true,              // 컬럼에 자동으로 "_"적용
        modelName: 'Reservation',          // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
        tableName: 'Reservations',         // 실제 데이터베이스에 적용되는 테이블이름
        charset: 'utf8mb4',             // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
        collate: 'utf8mb4_general_ci',  // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
    });
    Reservation.associate = models => {
        Reservation.hasMany(models.Reserve_review, {foreignKey: 'reservation_id', sourceKey: 'reservation_id'});
        Reservation.belongsTo(models.Market, {foreignKey: 'market_id', targetKey: 'market_id'});
        Reservation.belongsTo(models.Member, {foreignKey: 'member_id', targetKey: 'member_id'});
    };
    return Reservation;
};