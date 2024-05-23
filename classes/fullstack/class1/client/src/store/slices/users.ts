import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from '../../types/User';

type UsersState = {
  users: User[]
  usersPage: User[]
  currentUser: User | null
}

const initialState: UsersState = {
  users: [],
  currentUser: null,
  usersPage: []
}

function paginate<T>(array: T[], page: number, limit: number, filter: string, sort = false) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit
  console.log({ filter, sort, startIndex, endIndex, array })
  return array.slice(startIndex, endIndex)
}


export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state: UsersState, action: PayloadAction<User[]>) {
      state.users = action.payload
    },
    createUser(state, action) {
      state.users.push(action.payload)
    },
    updateUser(state, action) {
      const targetUserIdx = state.users.findIndex(user => user.id === action.payload.id)
      if (targetUserIdx === -1) throw new Error('invalid Id on update')
      state.users[targetUserIdx] = action.payload
    },
    setCurrentUserById(state, action) {
      const targetUser = state.users.find(user => user.id === action.payload)
      if (!targetUser) throw new Error('invalid id on set current user')
      state.currentUser = targetUser
    },
    setUsersPaginated(state: UsersState, { payload: {
      page, limit, sort, filter
    } }: PayloadAction<{
      page: number,
      limit: number,
      filter: string,
      sort?: boolean
    }>) {
      const paginated = paginate(state.users, page, limit, filter, sort)
      console.log("🚀 ~ paginated:", paginated)
      state.usersPage = paginated
    },
    deleteUserById(state: UsersState, action: PayloadAction<string>) {
      const targetUserIdx = state.users.findIndex(user => user.id === action.payload)
      if (targetUserIdx === -1) throw new Error('invalid id on remove')
      state.users.splice(targetUserIdx, 1)
    },
  }
})

export const {
  createUser,
  updateUser,
  setCurrentUserById,
  setUsersPaginated,
  deleteUserById,
  setUsers
} = usersSlice.actions

