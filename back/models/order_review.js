module.exports = (sequelize, DataTypes) => {
    const Order_review = sequelize.define("Order_review", {
        order_review_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true,
            comment: "고유 아이디값",
        },
        review: {
            type: DataTypes.INTEGER,
            comment: "리뷰내용",
        },
        rating: {
            type: DataTypes.INTEGER(5),
            comment: "평가점수",
        },
    }, {
        sequelize,
        timestamps: true,               // create_at 컬럼 입력된 시간, update_at 컬럼 업데이트된 시간 자동적용
        paranoid: true,                 // delete_at 컬럼 삭제된 시간 자동적용
        underscored: true,              // 컬럼에 자동으로 "_"적용
        modelName: 'Order_review',          // sequelize 에서 사용되는 테이블이름(node.js 코딩에서 활용)
        tableName: 'Order_reviews',         // 실제 데이터베이스에 적용되는 테이블이름
        charset: 'utf8mb4',             // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
        collate: 'utf8mb4_general_ci',  // 데이터베이스 캐릭터셋 에모지 스타일까지 적용
    });
    Order_review.associate = models => {
        Order_review.hasMany(models.Order_review_img, {foreignKey: 'order_review_id', sourceKey: 'order_review_id'});
        Order_review.hasOne(models.Order_review_answer, {foreignKey: 'order_review_id', sourceKey: 'order_review_id'});
        Order_review.belongsTo(models.Member, {foreignKey: 'member_id', targetKey: 'member_id'});
        Order_review.belongsTo(models.Market, {foreignKey: 'market_id', targetKey: 'market_id'});
        Order_review.belongsTo(models.Order, {foreignKey: 'order_id', targetKey: 'order_id'});
    };
    return Order_review;
}