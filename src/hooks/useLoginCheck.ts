import {UserType} from '../types/UserType'

export const useLoginCheck = (user: UserType): boolean => {
  console.log("🚀 ~ file: useLoginCheck.ts ~ line 4 ~ useLoginCheck ~ user", user)
  if (user.uid === "") {
    return false 
  } else {
    return true
  }
}