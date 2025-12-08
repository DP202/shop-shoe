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

  email: yup
    .string()
    .required('Vui lòng nhập email')
    .email('Email không đúng định dạng')
    .max(160, 'Email không được quá 160 ký tự'),
  price_min: yup.string().test({
    name: 'price-not-allowed',
    message: 'Giá không phù hợp',
    test: function (value) {
      const price_min = value
      const { price_max } = this.parent
      if (price_min !== '' && price_max != '') {
        return Number(price_max) >= Number(price_min)
      }
      return price_min !== '' || price_max !== ''
    }
  }),

  price_max: yup.string().test({
    name: 'price-not-allowed',
    message: 'Giá không phù hợp',
    test: function (value) {
      const price_max = value

      const { price_min } = this.parent
      if (price_min !== '' && price_max !== '') {
        return Number(price_max) >= Number(price_min)
      }
      return price_min !== '' || price_max !== ''
    }
  }),
  name: yup.string().trim().required('Tên sản phẩm là bắt buộc')
})

export const registerSchema = schema.pick(['username', 'password', 'passwordConfirm', 'email'])
export default schema
