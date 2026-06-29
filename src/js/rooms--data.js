/**
 * MOCK DATA — rooms-data.js
 * =========================
 * File dữ liệu mẫu cho hệ thống quản lý phòng khách sạn BC95.
 *
 * Cách dùng trong dự án thực tế:
 * - Đây là dữ liệu tĩnh thay thế cho API/database trong giai đoạn phát triển.
 * - Khi có backend thật, chỉ cần thay thế bằng lệnh fetch() / axios.get().
 *
 * Cấu trúc mỗi phòng (Room object):
 * {
 *   id          : number  — định danh duy nhất, dùng làm key và dynamic route /rooms/[id]
 *   name        : string  — tên hiển thị
 *   type        : string  — loại phòng: "standard" | "deluxe" | "suite"
 *   price       : number  — giá mỗi đêm (VND)
 *   capacity    : number  — số người tối đa
 *   area        : number  — diện tích (m²)
 *   available   : boolean — trạng thái còn / hết phòng
 *   thumbnail   : string  — URL ảnh đại diện (hiển thị trong danh sách)
 *   images      : array   — danh sách URL ảnh (hiển thị trong chi tiết)
 *   description : string  — mô tả phòng
 *   amenities   : array   — danh sách tiện nghi
 *   rating      : number  — điểm đánh giá trung bình (1.0 – 5.0)
 *   reviews     : number  — tổng số lượt đánh giá
 * }
 */

const rooms = [
    {
        id: 1,
        name: "Phòng Standard 101",
        type: "standard",
        price: 500000,
        capacity: 2,
        area: 25,
        available: true,
        thumbnail: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
            "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800&q=80",
        ],
        description:
            "Phòng Standard thoáng mát với view nhìn ra vườn cây xanh mát. Phù hợp cho 1–2 người, đầy đủ tiện nghi cơ bản.",
        amenities: ["WiFi miễn phí", "Điều hòa", "TV 32 inch", "Tủ lạnh mini", "Phòng tắm riêng"],
        rating: 4.2,
        reviews: 38,
    },
    {
        id: 2,
        name: "Phòng Deluxe 201",
        type: "deluxe",
        price: 900000,
        capacity: 2,
        area: 35,
        available: true,
        thumbnail: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
        ],
        description:
            "Phòng Deluxe rộng rãi với giường King Size, view nhìn ra hồ bơi. Thiết kế sang trọng, phù hợp cho cặp đôi.",
        amenities: ["WiFi miễn phí", "Điều hòa", "TV 43 inch", "Minibar", "Bồn tắm", "Ban công"],
        rating: 4.6,
        reviews: 72,
    },
    {
        id: 3,
        name: "Suite Hướng Biển 301",
        type: "suite",
        price: 2000000,
        capacity: 4,
        area: 65,
        available: false,
        thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
        ],
        description:
            "Suite cao cấp tầng 3 với toàn cảnh hướng biển. Có phòng khách riêng, bếp nhỏ và 2 phòng ngủ.",
        amenities: [
            "WiFi miễn phí",
            "Điều hòa",
            "TV 55 inch",
            "Bếp mini",
            "Bồn tắm Jacuzzi",
            "Dịch vụ phòng 24/7",
            "Butler riêng",
        ],
        rating: 4.9,
        reviews: 21,
    },
    {
        id: 4,
        name: "Phòng Standard 102",
        type: "standard",
        price: 480000,
        capacity: 2,
        area: 24,
        available: true,
        thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
        ],
        description:
            "Phòng Standard tiêu chuẩn, sạch sẽ, yên tĩnh. Phù hợp cho khách công tác.",
        amenities: ["WiFi miễn phí", "Điều hòa", "TV 32 inch", "Tủ lạnh mini"],
        rating: 4.0,
        reviews: 45,
    },
    {
        id: 5,
        name: "Phòng Deluxe 202",
        type: "deluxe",
        price: 950000,
        capacity: 3,
        area: 38,
        available: true,
        thumbnail: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
        ],
        description:
            "Phòng Deluxe với 2 giường đôi, thích hợp cho gia đình nhỏ hoặc nhóm bạn.",
        amenities: ["WiFi miễn phí", "Điều hòa", "TV 43 inch", "Minibar", "Ban công nhỏ"],
        rating: 4.5,
        reviews: 59,
    },
    {
        id: 6,
        name: "Suite Gia Đình 302",
        type: "suite",
        price: 2500000,
        capacity: 6,
        area: 80,
        available: true,
        thumbnail: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
        ],
        description:
            "Suite gia đình rộng nhất, có 3 phòng ngủ, phòng khách và bếp đầy đủ thiết bị.",
        amenities: [
            "WiFi miễn phí",
            "Điều hòa",
            "TV 65 inch",
            "Bếp đầy đủ",
            "2 phòng tắm",
            "Máy giặt",
            "Dịch vụ phòng 24/7",
        ],
        rating: 4.8,
        reviews: 14,
    },
];

// ─── Helper functions (ES6 arrow functions) ──────────────────────────────────

/**
 * Lấy 1 phòng theo id.
 * Array.find(): duyệt mảng, trả về phần tử đầu tiên thỏa điều kiện.
 * Trả về undefined nếu không tìm thấy.
 * @param {number} id
 * @returns {object | undefined}
 */
const getRoomById = (id) => rooms.find((room) => room.id === id);

/**
 * Lọc phòng theo loại.
 * Array.filter(): trả về mảng mới chứa các phần tử thỏa điều kiện.
 * @param {"standard" | "deluxe" | "suite"} type
 * @returns {object[]}
 */
const getRoomsByType = (type) => rooms.filter((room) => room.type === type);

/**
 * Lấy danh sách phòng còn trống.
 * room.available là boolean nên có thể dùng trực tiếp làm điều kiện.
 * @returns {object[]}
 */
const getAvailableRooms = () => rooms.filter((room) => room.available);

/**
 * Lọc phòng theo khoảng giá.
 * @param {number} min  — giá tối thiểu (VND)
 * @param {number} max  — giá tối đa (VND)
 * @returns {object[]}
 */
const getRoomsByPriceRange = (min, max) =>
    rooms.filter((room) => room.price >= min && room.price <= max);

// ─── Label & badge mapping ────────────────────────────────────────────────────

/**
 * Tên hiển thị theo loại phòng.
 * Dùng object thay if/else để dễ mở rộng thêm loại mới.
 */
const roomTypeLabel = {
    standard: "Standard",
    deluxe: "Deluxe",
    suite: "Suite",
};

/**
 * Class CSS (Tailwind) của badge theo loại phòng.
 * Dùng trong component: className={roomTypeBadge[room.type]}
 */
const roomTypeBadge = {
    standard: "bg-gray-100 text-gray-700",
    deluxe: "bg-blue-100 text-blue-700",
    suite: "bg-amber-100 text-amber-700",
};

// ─── Export (dùng khi import vào file khác) ───────────────────────────────────

// Nếu dùng trong môi trường Node.js / CommonJS (require):
if (typeof module !== "undefined") {
    module.exports = { rooms, getRoomById, getRoomsByType, getAvailableRooms, getRoomsByPriceRange, roomTypeLabel, roomTypeBadge };
}

// Nếu dùng trong browser (script tag), các biến tự động ở global scope.
// Ví dụ: <script src="rooms-data.js"></script> → dùng rooms, getRoomById(), ...