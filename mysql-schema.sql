CREATE DATABASE IF NOT EXISTS car_rental_db;
USE car_rental_db;

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100),
    vehicle_type VARCHAR(50),
    booking_date DATE
);

INSERT INTO bookings (user_name, vehicle_type, booking_date) VALUES
('Srinivas', 'Car', '2025-07-10'),
('Raj', 'Car', '2025-07-11'),
('Priya', 'Bike', '2025-07-12');
