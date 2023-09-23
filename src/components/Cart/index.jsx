import React from 'react'
import styles from './Cart.module.sass'
import { clearCart, dec, hideCart, inc } from '../../store/slices/cartSlice'
import { connect } from 'react-redux'
import { clearDisabled } from '../../store/slices/menuSlice'

function Cart ({ hide, cartData, inc, dec, clearCart, clearDisabled }) {
  const sum = cartData.cart.reduce(
    (total, cart) => total + cart.price * cart.amount,
    0
  )
  return (
    cartData.isVisible && (
      <>
        <div
          onClick={() => {
            hide()
          }}
          className={styles.overlay}
        ></div>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h2>Cart</h2>
            <button
              onClick={() => {
                hide()
              }}
              className={styles.btnX}
            >
              X
            </button>
          </div>
          <div className={styles.CartContent}>
            <div className={styles.Orders}>
              {cartData.cart.map(cart => {
                return (
                  <div key={cart.id}>
                    <div className={styles.CartItem}>
                      <div className={styles.Cart}>
                        <p>{cart.name}</p>
                        <p>{cart.price * cart.amount} грн</p>
                      </div>
                      <div className={styles.Counter}>
                        <button
                          className={styles.btnAmount}
                          onClick={() => {
                            dec(cart.id)
                          }}
                          disabled={cart.amount === 1}
                        >
                          -
                        </button>
                        <p>{cart.amount}</p>
                        <button
                          className={styles.btnAmount}
                          onClick={() => {
                            inc(cart.id)
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                )
              })}
            </div>
            {sum > 0 && (
              <div className={styles.Payment}>
                <div className={styles.Sum}>{sum} грн</div>
                <div className={styles.ChangeStatus}>
                  <button
                    onClick={() => {
                      clearCart()
                      clearDisabled()
                    }}
                    className={styles.Approve}
                  >
                    Оформити замовлення
                  </button>
                  <button
                    onClick={() => {
                      clearCart()
                      clearDisabled()
                    }}
                    className={styles.Reject}
                  >
                    Відмінити
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    )
  )
}

const mapStateToProps = state => ({
  cartData: state.cartData
})

const mapDispatchToProps = dispatch => ({
  hide: () => {
    dispatch(hideCart())
  },
  inc: id => {
    dispatch(inc(id))
  },
  dec: id => {
    dispatch(dec(id))
  },
  clearCart: () => {
    dispatch(clearCart())
  },
  clearDisabled: () => {
    dispatch(clearDisabled())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
