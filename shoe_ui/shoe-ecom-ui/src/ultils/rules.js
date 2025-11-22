import * as yup from 'yup'

export const schema = yup.object({
  username: yup
    .string()
    .required('Vui lòng nhập tên đăng nhập')
    .min(4, 'Tên đăng nhập phải có ít nhất 4 ký tự')
    .max(50, 'Tên đăng nhập không vượt quá 50 ký tự'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .max(160, 'Mật khẩu không được quá 160 ký tự'),
  passwordConfirm: yup
    .string()
    .required('Vui lòng nhập lại mật khẩu')
    .min(8, 'Mật khẩu nhập lại phải từ 8 ký tự trở lên')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp'),
  firstName: yup.string().required('Vui lòng nhập họ').max(50, 'Họ không được quá 50 ký tự'),
  dob: yup.date().nullable().required('Vui lòng chọn ngày sinh'),
  lastName: yup.string().required('Vui lòng nhập tên').max(50, 'Tên không được quá 50 ký tự'),
  email: yup
    .string()
    .required('Vui lòng nhập email')
    .email('Email không đúng định dạng')
    .max(160, 'Email không được quá 160 ký tự')
})
