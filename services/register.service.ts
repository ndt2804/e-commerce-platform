import supabase from "../configs/supabase";
export const createdUser = async (email: string, name: string, password: string, confirmPassword: string, avatar: string): Promise<any> => {
    const { data, error } = await supabase.from('license').insert({
        name,
        email,
        password,
        confirmPassword,
        avatar
    }).select('*');

    if (error) {
        console.error("Lỗi khi tạo mới user:", error);
        throw error;
    }
    return data;
};
