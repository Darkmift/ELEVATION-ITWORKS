import { DataSource } from "typeorm"
import { User } from "@/api/users/user.model"

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
AppDataSource.initialize()
export default AppDataSource
