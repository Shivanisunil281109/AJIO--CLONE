import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import api from "../../config/axiosConfig";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/toastSlice";
import "../CSS/DeliveryDetails.css";

function DeliveryDetails() {
  const [showAddressForm, setShowAddressForm] = useState(false);

  const emptyAddress = {
    name: "",
    mobile: "",
    pincode: "",
    locality: "",
    building: "",
    landmark: "",
    city: "",
    state: "",
    addressType: "Home",
    isDefault: false,
  };

  const [address, setAddress] = useState({ ...emptyAddress });
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await api.get("/user/get-addresses");

        if (response.data.success) {
          setSavedAddresses(response.data.addresses);
        }
      } catch (error) {
        console.error(
          "Fetch addresses error:",
          error.response?.data?.message || error.message,
        );
      }
    };

    fetchAddresses();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setAddress((previousAddress) => ({
      ...previousAddress,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const saveAddress = async (event) => {
    event.preventDefault();

    const requiredFields = [
      "name",
      "mobile",
      "pincode",
      "locality",
      "building",
      "landmark",
      "city",
      "state",
    ];

    const hasEmptyField = requiredFields.some(
      (field) => !address[field].trim(),
    );

    if (hasEmptyField) {
      dispatch(
        showToast({
          message: "Please fill all address fields.",
          type: "error",
        }),
      );
      return;
    }

    if (!/^[6-9]\d{9}$/.test(address.mobile.trim())) {
      dispatch(
        showToast({
          message: "Please enter a valid 10-digit mobile number.",
          type: "error",
        }),
      );
      return;
    }

    if (!/^\d{6}$/.test(address.pincode.trim())) {
      dispatch(
        showToast({
          message: "Please enter a valid 6-digit pincode.",
          type: "error",
        }),
      );
      return;
    }

    try {
      const response = await api.post("/user/create-address", address);

      if (response.data.success) {
        dispatch(
          showToast({
            message: "Address saved successfully!",
            type: "success",
          }),
        );

        setSavedAddresses((previousAddresses) => {
          const newAddress = response.data.address;

          if (newAddress.isDefault) {
            return [
              ...previousAddresses.map((item) => ({
                ...item,
                isDefault: false,
              })),
              newAddress,
            ];
          }

          return [...previousAddresses, newAddress];
        });

        setAddress({ ...emptyAddress });
        setShowAddressForm(false);
      }
    } catch (error) {
      console.error(
        "Save address error:",
        error.response?.data?.message || error.message,
      );

      dispatch(
        showToast({
          message: error.response?.data?.message || "Failed to save address.",
          type: "error",
        }),
      );
    }
  };

  const handleDeleteAddress = (indexToDelete) => {
    setSavedAddresses((previousAddresses) =>
      previousAddresses.filter((_, index) => index !== indexToDelete),
    );
  };

  const handleSelectAddress = (address) => {
    setSelectedAddressId(address._id);
  };

  return (
    <div className="delivery-details-page">
      <div className="delivery-heading">
        <h2>Delivery Details</h2>
        <p>Select or add your delivery address.</p>
      </div>

      <div className="delivery-content">
        <section className="delivery-address-section">
          <div className="delivery-section-heading">
            <h3>Saved Addresses</h3>

            <button
              type="button"
              className="delivery-add-btn"
              onClick={() => setShowAddressForm(true)}
            >
              + ADD NEW ADDRESS
            </button>
          </div>

          {savedAddresses.length === 0 ? (
            <p className="delivery-empty">
              No saved addresses yet. Add a delivery address to continue.
            </p>
          ) : (
            <div className="delivery-saved-addresses">
              {savedAddresses.map((item, index) => (
                <div className="delivery-saved-card" key={index}>
                  <label className="delivery-select-address">
                    <input
                      type="radio"
                      name="selectedAddress"
                      value={item._id}
                      checked={selectedAddressId === item._id}
                      onChange={() => handleSelectAddress(item)}
                    />
                    Select this address
                  </label>
                  <div className="delivery-saved-header">
                    <h4>{item.name}</h4>

                    <span className="delivery-address-type-badge">
                      {item.addressType}
                    </span>
                  </div>

                  {item.isDefault && (
                    <p className="delivery-default-label">Default Address</p>
                  )}

                  <p>{item.building}</p>
                  <p>{item.locality}</p>
                  <p>{item.landmark}</p>
                  <p>
                    {item.city}, {item.state} - {item.pincode}
                  </p>
                  <p>Phone: {item.mobile}</p>

                  <button
                    type="button"
                    className="delivery-delete-btn"
                    onClick={() => handleDeleteAddress(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}

          {showAddressForm && (
            <form className="delivery-address-form" onSubmit={saveAddress}>
              <div className="delivery-form-header">
                <h3>Add New Address</h3>

                <button
                  type="button"
                  className="delivery-close-btn"
                  onClick={() => {
                    setShowAddressForm(false);
                    setAddress({ ...emptyAddress });
                  }}
                  aria-label="Close address form"
                >
                  ×
                </button>
              </div>

              <div className="delivery-form-row">
                <div className="delivery-form-group">
                  <label htmlFor="delivery-name">Name *</label>
                  <input
                    id="delivery-name"
                    type="text"
                    name="name"
                    value={address.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="delivery-form-group">
                  <label htmlFor="delivery-mobile">Mobile *</label>
                  <input
                    id="delivery-mobile"
                    type="tel"
                    name="mobile"
                    value={address.mobile}
                    onChange={handleChange}
                    maxLength={10}
                    required
                  />
                </div>
              </div>

              <div className="delivery-form-row">
                <div className="delivery-form-group">
                  <label htmlFor="delivery-pincode">Pin Code *</label>
                  <input
                    id="delivery-pincode"
                    type="text"
                    name="pincode"
                    value={address.pincode}
                    onChange={handleChange}
                    maxLength={6}
                    required
                  />
                </div>

                <div className="delivery-form-group">
                  <label htmlFor="delivery-locality">
                    Locality / Area / Street *
                  </label>
                  <input
                    id="delivery-locality"
                    type="text"
                    name="locality"
                    value={address.locality}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="delivery-form-row">
                <div className="delivery-form-group">
                  <label htmlFor="delivery-building">
                    Flat Number / Building Name *
                  </label>
                  <input
                    id="delivery-building"
                    type="text"
                    name="building"
                    value={address.building}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="delivery-form-group">
                  <label htmlFor="delivery-landmark">Landmark *</label>
                  <input
                    id="delivery-landmark"
                    type="text"
                    name="landmark"
                    value={address.landmark}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="delivery-form-row">
                <div className="delivery-form-group">
                  <label htmlFor="delivery-city">District / City *</label>
                  <input
                    id="delivery-city"
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="delivery-form-group">
                  <label htmlFor="delivery-state">State *</label>
                  <input
                    id="delivery-state"
                    type="text"
                    name="state"
                    value={address.state}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="delivery-address-type-section">
                <label className="delivery-address-type-title">
                  Address Type
                </label>

                <div className="delivery-address-type-options">
                  {["Home", "Work", "Others"].map((type) => (
                    <label key={type}>
                      <input
                        type="radio"
                        name="addressType"
                        value={type}
                        checked={address.addressType === type}
                        onChange={handleChange}
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <label className="delivery-default-checkbox">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={address.isDefault}
                  onChange={handleChange}
                />
                Make as default Address
              </label>

              <div className="delivery-form-buttons">
                <button
                  type="button"
                  className="delivery-cancel-btn"
                  onClick={() => {
                    setShowAddressForm(false);
                    setAddress({ ...emptyAddress });
                  }}
                >
                  CANCEL
                </button>

                <button type="submit" className="delivery-save-btn">
                  SAVE ADDRESS
                </button>
              </div>
            </form>
          )}
        </section>
      </div>

      <div className="delivery-continue-section">
        <button
          type="button"
          className="delivery-continue-btn"
          onClick={() => {
            if (!selectedAddressId) {
              dispatch(
                showToast({
                  message: "Please select a delivery address",
                  type: "error",
                }),
              );
              return;
            }

            navigate("/payment", {
              state: {
                selectedAddress: savedAddresses.find(
                  (item) => item._id === selectedAddressId,
                ),
              },
            });
          }}
        >
          CONTINUE TO PAYMENT
        </button>
      </div>
    </div>
  );
}

export default DeliveryDetails;
