--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: review_info; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.review_info AS (
	review_id bigint,
	review_text character varying,
	stars integer,
	order_order_id bigint,
	email character varying
);


ALTER TYPE public.review_info OWNER TO postgres;

--
-- Name: func_allreviewsforadmin(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.func_allreviewsforadmin() RETURNS TABLE(review_id bigint, review_text character varying, stars integer, order_order_id bigint, email character varying)
    LANGUAGE plpgsql
    AS $$
BEGIN
    RETURN QUERY
    SELECT
        r.review_id,
        r.review_text,
        r.stars,
        r.order_order_id,
        u.email 
    FROM
        reviews r
    INNER JOIN
        users u ON u.user_id = r.user_user_id;
END;
$$;


ALTER FUNCTION public.func_allreviewsforadmin() OWNER TO postgres;

--
-- Name: func_allreviewsforauser(bigint); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.func_allreviewsforauser(userid bigint) RETURNS TABLE(review_id bigint, review_text character varying, stars integer, order_order_id bigint)
    LANGUAGE plpgsql
    AS $$
BEGIN
    RETURN QUERY
    SELECT
        r.review_id,
        r.review_text,
        r.stars,
        r.order_order_id
       
    FROM
        reviews r
    where r.user_user_id = userid;
END;
$$;


ALTER FUNCTION public.func_allreviewsforauser(userid bigint) OWNER TO postgres;

--
-- Name: proc_AllReviewsForAdmin(); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public."proc_AllReviewsForAdmin"(OUT review_id bigint, OUT stars integer, OUT review_text character varying, OUT order_order_id bigint, OUT email character varying)
    LANGUAGE plpgsql
    AS $$

Begin

    SELECT
        r.review_id,
        r.review_text,
        r.stars,
        r.order_order_id,
        u.email 
		   INTO
        review_id,
        review_text,
        stars,
        order_order_id,
        email
		FROM reviews r INNER JOIN users u ON u.user_id = r.user_user_id;
end;
$$;


ALTER PROCEDURE public."proc_AllReviewsForAdmin"(OUT review_id bigint, OUT stars integer, OUT review_text character varying, OUT order_order_id bigint, OUT email character varying) OWNER TO postgres;

--
-- Name: proc_updateAllDeliveryGuys(); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public."proc_updateAllDeliveryGuys"()
    LANGUAGE plpgsql
    AS $$begin 

UPDATE delivery_guy 
SET status = 'Available' 
WHERE status != 'Available';

end$$;


ALTER PROCEDURE public."proc_updateAllDeliveryGuys"() OWNER TO postgres;

--
-- Name: proc_updateDeliveryBoyStatus(bigint, character varying); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public."proc_updateDeliveryBoyStatus"(IN deliveryguyid bigint, IN proc_status character varying)
    LANGUAGE plpgsql
    AS $$
BEGIN
    UPDATE delivery_guy SET status = proc_status WHERE delivery_guy_id = deliveryguyid;
END
$$;


ALTER PROCEDURE public."proc_updateDeliveryBoyStatus"(IN deliveryguyid bigint, IN proc_status character varying) OWNER TO postgres;

--
-- Name: test(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.test() RETURNS integer
    LANGUAGE plpgsql
    AS $$	
declare totaluser integer;
begin
select count(*) from users into totaluser;
return totaluser;
end
$$;


ALTER FUNCTION public.test() OWNER TO postgres;

--
-- Name: users_logs_trg_func(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.users_logs_trg_func() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    -- Check if the operation is an UPDATE or DELETE
    IF TG_OP = 'UPDATE' THEN
        INSERT INTO users_logs (old_user_id, old_address, old_email, old_first_name, old_password, old_phone_number)
        VALUES (OLD.user_id, OLD.address, OLD.email, OLD.first_name, OLD.password, OLD.phone_number);
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO users_logs (old_user_id, old_address, old_email, old_first_name, old_password, old_phone_number)
        VALUES (OLD.user_id, OLD.address, OLD.email, OLD.first_name, OLD.password, OLD.phone_number);
        RETURN OLD;
    END IF;
END;
$$;


ALTER FUNCTION public.users_logs_trg_func() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id bigint NOT NULL,
    noofitems bigint,
    name character varying(255)
);


ALTER TABLE public.category OWNER TO postgres;

--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO postgres;

--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: delivery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.delivery (
    delivery_id bigint NOT NULL,
    end_time timestamp(6) without time zone,
    start_time timestamp(6) without time zone,
    delivery_guy bigint,
    order_id bigint
);


ALTER TABLE public.delivery OWNER TO postgres;

--
-- Name: delivery_delivery_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.delivery_delivery_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.delivery_delivery_id_seq OWNER TO postgres;

--
-- Name: delivery_delivery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.delivery_delivery_id_seq OWNED BY public.delivery.delivery_id;


--
-- Name: delivery_guy; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.delivery_guy (
    delivery_guy_id bigint NOT NULL,
    phonenumber bigint,
    name character varying(255),
    status character varying(255),
    vehicle character varying(255),
    vehicle_number character varying(255)
);


ALTER TABLE public.delivery_guy OWNER TO postgres;

--
-- Name: delivery_guy_delivery_guy_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.delivery_guy_delivery_guy_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.delivery_guy_delivery_guy_id_seq OWNER TO postgres;

--
-- Name: delivery_guy_delivery_guy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.delivery_guy_delivery_guy_id_seq OWNED BY public.delivery_guy.delivery_guy_id;


--
-- Name: fooditem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.fooditem (
    food_id bigint NOT NULL,
    description character varying(255),
    food_name character varying(255),
    ingredients character varying(255),
    price double precision NOT NULL,
    category_id bigint
);


ALTER TABLE public.fooditem OWNER TO postgres;

--
-- Name: fooditem_food_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.fooditem_food_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.fooditem_food_id_seq OWNER TO postgres;

--
-- Name: fooditem_food_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.fooditem_food_id_seq OWNED BY public.fooditem.food_id;


--
-- Name: order_details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_details (
    slip_id bigint NOT NULL,
    quantity integer NOT NULL,
    food_id bigint,
    order_id_order_id bigint
);


ALTER TABLE public.order_details OWNER TO postgres;

--
-- Name: order_details_slip_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_details_slip_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_details_slip_id_seq OWNER TO postgres;

--
-- Name: order_details_slip_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_details_slip_id_seq OWNED BY public.order_details.slip_id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    order_id bigint NOT NULL,
    datetime timestamp(6) without time zone,
    status character varying(255),
    payment_id bigint,
    user_user_id bigint
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_order_id_seq OWNER TO postgres;

--
-- Name: orders_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;


--
-- Name: payment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payment (
    payment_id bigint NOT NULL,
    mode character varying(255),
    tax_percent double precision,
    amount double precision NOT NULL
);


ALTER TABLE public.payment OWNER TO postgres;

--
-- Name: payment_payment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payment_payment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payment_payment_id_seq OWNER TO postgres;

--
-- Name: payment_payment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payment_payment_id_seq OWNED BY public.payment.payment_id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    review_id bigint NOT NULL,
    stars integer NOT NULL,
    review_text character varying(255),
    user_user_id bigint,
    order_order_id bigint
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Name: reviews_review_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reviews_review_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_review_id_seq OWNER TO postgres;

--
-- Name: reviews_review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reviews_review_id_seq OWNED BY public.reviews.review_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id bigint NOT NULL,
    address character varying(255),
    email character varying(255),
    first_name character varying(255),
    last_name character varying(255),
    password character varying(255),
    phone_number character varying(255),
    role character varying(255),
    user_type integer NOT NULL,
    version bigint,
    CONSTRAINT users_role_check CHECK (((role)::text = ANY ((ARRAY['USER'::character varying, 'ADMIN'::character varying])::text[])))
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_logs (
    old_user_id bigint,
    old_address character varying(255),
    old_email character varying(255),
    old_first_name character varying(255),
    old_last_name character varying(255),
    old_password character varying(255),
    old_phone_number character varying(255)
);


ALTER TABLE public.users_logs OWNER TO postgres;

--
-- Name: users_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_seq OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN user_id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: delivery delivery_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery ALTER COLUMN delivery_id SET DEFAULT nextval('public.delivery_delivery_id_seq'::regclass);


--
-- Name: delivery_guy delivery_guy_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery_guy ALTER COLUMN delivery_guy_id SET DEFAULT nextval('public.delivery_guy_delivery_guy_id_seq'::regclass);


--
-- Name: fooditem food_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fooditem ALTER COLUMN food_id SET DEFAULT nextval('public.fooditem_food_id_seq'::regclass);


--
-- Name: order_details slip_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_details ALTER COLUMN slip_id SET DEFAULT nextval('public.order_details_slip_id_seq'::regclass);


--
-- Name: orders order_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);


--
-- Name: payment payment_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment ALTER COLUMN payment_id SET DEFAULT nextval('public.payment_payment_id_seq'::regclass);


--
-- Name: reviews review_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews ALTER COLUMN review_id SET DEFAULT nextval('public.reviews_review_id_seq'::regclass);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category (id, noofitems, name) FROM stdin;
2	0	Pakistani
3	0	Italian
4	0	Mexican
5	0	Chinese
6	0	Thai
7	0	FastFood
8	0	Indian
9	0	Extra
10	0	Dessert
1	0	Check
\.


--
-- Data for Name: delivery; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.delivery (delivery_id, end_time, start_time, delivery_guy, order_id) FROM stdin;
22	2023-12-03 07:53:40.738	2023-12-03 07:03:40.738	1	77
23	2023-12-03 07:56:36.025	2023-12-03 07:06:36.025	1	81
24	2023-12-03 07:58:42.337	2023-12-03 07:08:42.337	4	86
25	2023-12-03 08:00:34.704	2023-12-03 07:10:34.704	1	64
27	2023-12-03 08:00:50.176	2023-12-03 07:10:50.176	1	70
28	2023-12-03 08:00:54.559	2023-12-03 07:10:54.559	1	76
31	2023-12-03 08:27:42.093	2023-12-03 07:37:42.093	1	82
32	2023-12-03 08:28:25.55	2023-12-03 07:38:25.55	1	80
33	2023-12-03 08:37:24.783	2023-12-03 07:47:24.783	1	65
34	2023-12-03 08:40:21.184	2023-12-03 07:50:21.184	1	66
35	2023-12-03 08:41:08.615	2023-12-03 07:51:08.615	1	67
36	2023-12-03 09:06:18.364	2023-12-03 08:16:18.364	1	68
37	2023-12-03 09:07:35.815	2023-12-03 08:17:35.815	1	69
39	2023-12-03 09:34:05.535	2023-12-03 08:44:05.535	1	71
40	2023-12-03 09:35:35.297	2023-12-03 08:45:35.297	1	72
41	2023-12-03 09:36:08.758	2023-12-03 08:46:08.758	1	73
42	2023-12-03 09:37:48.036	2023-12-03 08:47:48.036	1	74
43	2023-12-03 11:28:18.854	2023-12-03 10:38:18.855	1	75
44	2023-12-06 09:16:50.627	2023-12-06 08:26:50.628	2	89
\.


--
-- Data for Name: delivery_guy; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.delivery_guy (delivery_guy_id, phonenumber, name, status, vehicle, vehicle_number) FROM stdin;
4	3341311626	Akhtar Siddique	Available	Bike	QBC-113
5	3528461252	Hasan Rauf	Available	Bike	AWA-173
6	3228551472	Abdul Haris	Available	Car	AGC-163
7	3146342162	Jahangir Asim	Available	Bike	QVC-123
8	3218211142	Usman Ghaffoor	Available	Bicycle	NZR-123
3	3526321724	Kashif Khan	Available	Car	AWY-123
1	3148301122	Asif Rehman	Available	Bike	ABC-143
2	3644362621	Asim Munir	Unavailable	Bicycle	PBC-163
\.


--
-- Data for Name: fooditem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.fooditem (food_id, description, food_name, ingredients, price, category_id) FROM stdin;
1	Savory Continental Delight	Chicken Alfredo Pasta	Chicken, Alfredo sauce, Pasta	999	1
2	Mouthwatering Beef Steak	Grilled Beef Steak	Beef, Mashed Potatoes, Gravy	1499	1
3	Classic Caesar Salad	Caesar Salad	Romaine Lettuce, Parmesan, Croutons	699	1
4	Cheesy Garlic Bread	Garlic Parmesan Breadsticks	Dough, Garlic, Parmesan	599	1
5	Creamy Mushroom Risotto	Mushroom Risotto	Arborio Rice, Mushrooms, Parmesan	1199	1
6	Butter Garlic Prawns	Butter Garlic Prawns	Prawns, Butter, Garlic	1299	1
7	Vegetable Lasagna	Vegetarian Lasagna	Zucchini, Tomato Sauce, Cheese	899	1
8	Herb Infused Grilled Chicken	Herb Grilled Chicken Breast	Chicken, Herbs, Olive Oil	1099	1
9	Seafood Paella	Seafood Paella	Rice, Shrimp, Mussels, Chorizo	1599	1
10	Spinach and Feta Stuffed Chicken	Stuffed Chicken Breast	Chicken, Spinach, Feta	1399	1
11	Spicy Chicken Biryani	Chicken Biryani	Chicken, Basmati Rice, Spices	899	2
12	Tender Lamb Karahi	Lamb Karahi	Lamb, Tomatoes, Green Chilies	1299	2
13	Flavorful Seekh Kebabs	Seekh Kebabs	Minced Meat, Spices, Skewers	799	2
14	Homemade Chicken Nihari	Chicken Nihari	Chicken, Wheat Flour, Spices	1199	2
15	Palak Paneer Delight	Palak Paneer	Paneer, Spinach, Cream	999	2
16	Spicy Aloo Keema	Aloo Keema	Minced Meat, Potatoes, Spices	1099	2
17	Chapli Kebab	Chapli Kebab	Minced Meat, Onions, Spices	899	2
18	Mouthwatering Haleem	Beef Haleem	Beef, Lentils, Wheat	1499	2
19	Dahi Puri	Dahi Puri	Puri, Yogurt, Chutney	699	2
20	Karachi Street Tawa Pulao	Tawa Pulao	Rice, Vegetables, Spices	1199	2
21	Classic Margherita Pizza	Margherita Pizza	Dough, Tomatoes, Mozzarella	699	3
22	Rich and Creamy Carbonara	Spaghetti Carbonara	Spaghetti, Eggs, Bacon	1199	3
23	Eggplant Parmesan	Eggplant Parmesan	Eggplant, Tomato Sauce, Cheese	899	3
24	Delicious Pesto Pasta	Pesto Pasta	Pasta, Basil Pesto, Pine Nuts	1099	3
25	Caprese Salad	Caprese Salad	Tomatoes, Mozzarella, Basil	799	3
26	Chicken Piccata	Chicken Piccata	Chicken, Lemon, Capers	1299	3
27	Seafood Linguine	Seafood Linguine	Linguine, Shrimp, Clams	1499	3
28	Rustic Tomato Basil Soup	Tomato Basil Soup	Tomatoes, Basil, Garlic	599	3
29	Vegetarian Calzone	Vegetarian Calzone	Dough, Vegetables, Cheese	999	3
30	Homemade Tiramisu	Tiramisu	Ladyfingers, Coffee, Mascarpone	899	3
31	Spicy Chicken Enchiladas	Chicken Enchiladas	Chicken, Tortillas, Salsa	1099	4
32	Crispy Fish Tacos	Fish Tacos	Fish, Tortillas, Cabbage Slaw	1299	4
33	Cheesy Quesadillas	Cheese Quesadillas	Tortillas, Cheese, Salsa	799	4
34	Vegetarian Burrito Bowl	Vegetarian Burrito Bowl	Rice, Beans, Guacamole	899	4
35	Beef Fajitas	Beef Fajitas	Beef, Bell Peppers, Onions	1199	4
36	Corn and Black Bean Salad	Black Bean Salad	Black Beans, Corn, Avocado	699	4
37	Chiles Rellenos	Chiles Rellenos	Poblano Peppers, Cheese, Sauce	1399	4
38	Spicy Mango Salsa	Mango Salsa	Mango, Red Onion, Jalapeno	599	4
39	Mexican Street Corn	Elote	Corn, Mayonnaise, Cotija Cheese	799	4
40	Tres Leches Cake	Tres Leches Cake	Sponge Cake, Milk, Whipped Cream	999	4
41	Sweet and Sour Chicken	Sweet and Sour Chicken	Chicken, Pineapple, Bell Peppers	1099	5
42	Beef and Broccoli Stir-Fry	Beef and Broccoli	Beef, Broccoli, Soy Sauce	1199	5
43	Vegetable Spring Rolls	Spring Rolls	Cabbage, Carrots, Spring Roll Wrappers	799	5
44	Kung Pao Shrimp	Kung Pao Shrimp	Shrimp, Peanuts, Vegetables	1299	5
45	General Tso's Tofu	General Tso's Tofu	Tofu, Soy Sauce, Chili Sauce	999	5
46	Peking Duck Pancakes	Peking Duck Pancakes	Duck, Hoisin Sauce, Pancakes	1499	5
47	Sesame Noodles	Sesame Noodles	Noodles, Sesame Oil, Soy Sauce	899	5
48	Garlic Ginger Bok Choy	Garlic Ginger Bok Choy	Bok Choy, Garlic, Ginger	699	5
49	Shrimp Fried Rice	Shrimp Fried Rice	Rice, Shrimp, Peas, Carrots	1099	5
50	Orange Chicken	Orange Chicken	Chicken, Orange Sauce, Green Onions	1299	5
51	Spicy Basil Chicken	Spicy Basil Chicken	Chicken, Basil, Chili, Garlic	1199	6
52	Tom Yum Soup	Tom Yum Soup	Shrimp, Lemongrass, Mushrooms	799	6
53	Green Curry Shrimp	Green Curry Shrimp	Shrimp, Coconut Milk, Green Curry Paste	1299	6
54	Pad Thai Noodles	Pad Thai Noodles	Rice Noodles, Shrimp, Tofu	1099	6
55	Mango Sticky Rice	Mango Sticky Rice	Sticky Rice, Mango, Coconut Milk	899	6
56	Massaman Beef Curry	Massaman Beef Curry	Beef, Potatoes, Peanuts	1399	6
57	Pineapple Fried Rice	Pineapple Fried Rice	Rice, Pineapple, Chicken	999	6
58	Papaya Salad	Som Tum (Papaya Salad)	Green Papaya, Tomatoes, Peanuts	799	6
59	Thai Iced Tea	Thai Iced Tea	Black Tea, Condensed Milk, Ice	599	6
60	Chicken Satay	Chicken Satay	Chicken, Peanut Sauce, Cucumber	1099	6
61	Classic Cheeseburger	Cheeseburger	Beef Patty, Cheese, Lettuce, Tomato	699	7
62	Crispy Chicken Tenders	Chicken Tenders	Chicken Breast, Breadcrumbs, Dipping Sauce	799	7
63	BBQ Pulled Pork Sandwich	Pulled Pork Sandwich	Pork, BBQ Sauce, Coleslaw	899	7
64	Vegetarian Quesadilla	Vegetarian Quesadilla	Tortillas, Cheese, Vegetables	799	7
65	Spicy Chicken Wings	Spicy Chicken Wings	Chicken Wings, Hot Sauce, Celery	999	7
66	Loaded Nachos	Loaded Nachos	Tortilla Chips, Cheese, Salsa	699	7
67	Classic Hot Dog	Hot Dog	Beef Frankfurter, Bun, Mustard	599	7
68	Grilled Cheese Sandwich	Grilled Cheese	Bread, Cheese, Butter	699	7
69	BLT Sandwich	BLT Sandwich	Bacon, Lettuce, Tomato, Mayo	799	7
70	Mushroom Swiss Burger	Mushroom Swiss Burger	Beef Patty, Mushrooms, Swiss Cheese	1099	7
71	Butter Chicken	Butter Chicken	Chicken, Butter, Tomato Sauce	1199	8
72	Palak Paneer	Palak Paneer	Paneer, Spinach, Cream	999	8
73	Chicken Biryani	Chicken Biryani	Chicken, Basmati Rice, Spices	1099	8
74	Aloo Gobi	Aloo Gobi	Potatoes, Cauliflower, Spices	899	8
75	Dal Makhani	Dal Makhani	Black Lentils, Kidney Beans, Cream	1299	8
76	Tandoori Chicken	Tandoori Chicken	Chicken, Yogurt, Spices	1399	8
77	Paneer Tikka Masala	Paneer Tikka Masala	Paneer, Tomato Sauce, Cream	1199	8
78	Vegetable Biryani	Vegetable Biryani	Mixed Vegetables, Basmati Rice, Spices	999	8
79	Chana Masala	Chana Masala	Chickpeas, Tomatoes, Spices	899	8
80	Rogan Josh	Rogan Josh	Lamb, Yogurt, Spices	1499	8
81	Garlic Naan	Garlic Naan	Flour, Garlic, Butter	59	9
82	Paratha	Paratha	Whole Wheat Flour, Ghee, Water	69	9
83	Extra Cheese	Extra Cheese	Assorted Cheese	109	9
84	Mineral Water	Mineral Water	Bottled Water	69	9
85	Soda	Soda	Carbonated Water, Flavoring	99	9
86	Puri	Puri	Whole Wheat Flour, Water, Oil	59	9
87	Extra Rice	Extra Rice	Basmati Rice	199	9
88	Salad	Fresh Garden Salad	Lettuce, Tomatoes, Cucumbers	199	9
89	Raita	Cucumber Raita	Yogurt, Cucumber, Mint	119	9
90	Sauce	Assorted Sauces	Ketchup, Mustard, Mayo	59	9
91	Coleslaw	Coleslaw	Cabbage, Carrots, Mayo	149	9
92	Gulab Jamun	Gulab Jamun	Khoya, Sugar, Cardamom	299	10
93	Rasgulla	Rasgulla	Paneer, Sugar Syrup	249	10
94	Kheer	Kheer	Rice, Milk, Sugar	199	10
95	Jalebi	Jalebi	Maida, Yogurt, Saffron	199	10
96	Barfi	Assorted Barfi	Khoya, Nuts, Sugar	299	10
97	Rasmalai	Rasmalai	Paneer, Milk, Saffron	249	10
98	Halwa	Carrot Halwa	Carrots, Milk, Ghee	399	10
99	Ladoo	Besan Ladoo	Gram Flour, Ghee, Sugar	149	10
100	Firni	Rose Firni	Rice, Milk, Rose Water	199	10
101	Ice Cream	Assorted Ice Cream	Milk, Sugar, Flavorings	149	10
102	Chicken Tikka	Tikka	Chicken, Spices	543	2
\.


--
-- Data for Name: order_details; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_details (slip_id, quantity, food_id, order_id_order_id) FROM stdin;
105	2	7	63
106	1	11	65
107	1	11	69
109	1	11	72
110	150	11	73
111	15	11	74
112	15	12	75
113	15	11	76
114	15	11	79
115	15	11	81
116	15	11	83
117	15	11	85
118	15	11	86
121	4	11	89
122	4	14	89
123	5	81	89
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (order_id, datetime, status, payment_id, user_user_id) FROM stdin;
63	2023-11-24 18:21:27.756	In Progress	21	1
78	2023-11-30 22:39:32.4	Pending	\N	13
79	2023-11-30 22:39:47.577	Pending	\N	13
83	2023-11-30 22:45:45.96	Pending	\N	13
84	2023-11-30 22:46:06.341	Pending	\N	13
85	2023-11-30 22:46:47.306	Pending	\N	13
77	2023-11-30 22:38:59.748	Dispatched	\N	13
81	2023-11-30 22:44:02.424	Dispatched	\N	13
86	2023-11-30 22:47:07.389	Dispatched	\N	13
64	2023-11-30 18:03:43.621	Dispatched	\N	13
76	2023-11-30 22:38:35.409	Dispatched	\N	13
82	2023-11-30 22:44:53.954	Dispatched	\N	13
80	2023-11-30 22:43:08.796	Dispatched	\N	13
65	2023-11-30 18:05:19.129	Dispatched	\N	13
66	2023-11-30 18:06:31.234	Dispatched	\N	13
67	2023-11-30 18:08:08.265	Dispatched	\N	13
68	2023-11-30 18:11:21.335	Dispatched	\N	13
69	2023-11-30 18:11:50.648	Dispatched	\N	13
70	2023-11-30 18:12:30.48	Dispatched	\N	13
71	2023-11-30 18:14:03.677	Dispatched	\N	13
72	2023-11-30 18:26:02.314	Dispatched	\N	13
73	2023-11-30 22:36:11.575	Dispatched	\N	13
74	2023-11-30 22:37:17.569	Dispatched	\N	13
75	2023-11-30 22:37:36.371	Dispatched	\N	13
89	2023-12-06 13:16:52.177	Dispatched	24	19
\.


--
-- Data for Name: payment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payment (payment_id, mode, tax_percent, amount) FROM stdin;
18	Cash on Delivery	\N	9590
19	Cash on Delivery	\N	7994
20	Cash on Delivery	\N	8992
21	Cash on Delivery	\N	1898
22	Cash on Delivery	\N	1898
23	Cash on Delivery	\N	1898
24	Cash on Delivery	\N	8787
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (review_id, stars, review_text, user_user_id, order_order_id) FROM stdin;
1	2	\N	\N	\N
2	4	\N	\N	\N
3	2	\N	\N	\N
4	4	\N	\N	\N
5	1	a	13	84
6	3	asdadsasd	13	76
7	5		13	69
8	3	asdadsd	13	83
9	4	asdasas	13	72
12	4	asdasasas	19	89
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, address, email, first_name, last_name, password, phone_number, role, user_type, version) FROM stdin;
1	-	Admin	Shahroz	Salman	$2a$10$AcCPdf25E4pJSLrCjFczEOfrz8Bms7traaE8TxwOGxpaXdSpWJ1u6	012030203	\N	0	\N
6	1249922149	Shahroz1	Shahroz1	Salman	$2a$10$KDtlFl9HDpTrIk7EPJTqoO4N1PXdK.RnvRRx.oq/1A2KqUA0lmcci	924112499124	\N	1	\N
13	check	check	check	check	$2a$10$A7d2vKxEPraa5zt3HGLIQeDwidnKcT73Sjejv0ocarDhTRhfZjKSS	123	\N	1	\N
16	123	Shah	Shah	Shah	$2a$10$T2IImQzuVYskAMtjLaxgk.yUupU4AG0M73V3oHYhDKRzF7t0K8Q/a	123	\N	1	0
17					$2a$10$ypYI7yAPHJjB0pk.469u1.tKE7gicLvU/YWo2kfpV78xM6il75TJu		\N	1	0
18	s	s	Shahroz	Shahroz	$2a$10$h5xiMqPpjtVxjKh66BtlleT8X7cp0mDiIc9T/FuyE31ycv2ZHQoji	s	\N	1	0
19	a	a	a	a	$2a$10$9EAgSNhS5Do3v7.sWixC6.sk2ZsWlHpgyEzhqtqRJI/4OqhfJZSui	a	\N	1	0
\.


--
-- Data for Name: users_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_logs (old_user_id, old_address, old_email, old_first_name, old_last_name, old_password, old_phone_number) FROM stdin;
10	sadhias	Shah	Shhahroz	\N	$2a$10$vv9C8ExuUhPfH7BWS0Fm2ubmCBOjxxUGMoCyH6BoMmCNXNqps7mK6	234124
10	sadhias	Shah	Shhahrozzzzz	\N	$2a$10$vv9C8ExuUhPfH7BWS0Fm2ubmCBOjxxUGMoCyH6BoMmCNXNqps7mK6	234124
6	1249922149	Shahroz1	Shahroz1	\N	$2a$10$KDtlFl9HDpTrIk7EPJTqoO4N1PXdK.RnvRRx.oq/1A2KqUA0lmcci	924112499124
10	sadhias	Shah	Shhahrozzzzzzzzz	\N	$2a$10$vv9C8ExuUhPfH7BWS0Fm2ubmCBOjxxUGMoCyH6BoMmCNXNqps7mK6	234124
12	241	Shah1	Shahrozzzzz	\N	$2a$10$55CGsKSXlnw9ksyKAuyuO.ivkZiy2.KYDzQYH96r4vjgnL2PdOl0C	124
9	ASDAsadasdas	Shahroz5	Shahroz	\N	$2a$10$AcWn5oOrgV.EKm.nVkyWCubVAfIF2O2/Yl7sUFHtoKZVUA4BxwJGG	124124124124
8	A-1230320,Karachi	Shahroz3	Shahroz	\N	$2a$10$MVgFhLAZCiMjQPhQZqH9ge.Md1toiMk3FoA6ivwWL8Rjp1l9Q0ZCy	021401240124
7	12424124241	Shahroz2	Shahroz2	\N	$2a$10$Zv3sVR2OemtcSfFusEz4V.xO0kPx9PDYTvrG4NF7wu6BQXo7VgZ2u	12412424142
\.


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 12, true);


--
-- Name: delivery_delivery_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.delivery_delivery_id_seq', 44, true);


--
-- Name: delivery_guy_delivery_guy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.delivery_guy_delivery_guy_id_seq', 8, true);


--
-- Name: fooditem_food_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.fooditem_food_id_seq', 105, true);


--
-- Name: order_details_slip_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_details_slip_id_seq', 123, true);


--
-- Name: orders_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_order_id_seq', 89, true);


--
-- Name: payment_payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_payment_id_seq', 24, true);


--
-- Name: reviews_review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reviews_review_id_seq', 12, true);


--
-- Name: users_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_seq', 1, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 19, true);


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- Name: delivery_guy delivery_guy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery_guy
    ADD CONSTRAINT delivery_guy_pkey PRIMARY KEY (delivery_guy_id);


--
-- Name: delivery delivery_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_pkey PRIMARY KEY (delivery_id);


--
-- Name: fooditem fooditem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fooditem
    ADD CONSTRAINT fooditem_pkey PRIMARY KEY (food_id);


--
-- Name: order_details order_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_pkey PRIMARY KEY (slip_id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- Name: payment payment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pkey PRIMARY KEY (payment_id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (review_id);


--
-- Name: delivery uk_3bdrbd2jcybaaa5rxkj4s7vlk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT uk_3bdrbd2jcybaaa5rxkj4s7vlk UNIQUE (order_id);


--
-- Name: users uk_6dotkott2kjsp8vw4d0m25fb7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT uk_6dotkott2kjsp8vw4d0m25fb7 UNIQUE (email);


--
-- Name: orders uk_haujdjk1ohmeixjhnhslchrp1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT uk_haujdjk1ohmeixjhnhslchrp1 UNIQUE (payment_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users user_trg; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER user_trg BEFORE DELETE OR UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.users_logs_trg_func();


--
-- Name: order_details fk2vewus7006cjuw2a58megqbjx; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT fk2vewus7006cjuw2a58megqbjx FOREIGN KEY (food_id) REFERENCES public.fooditem(food_id);


--
-- Name: orders fk38709695otpk064vi3y92u08s; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fk38709695otpk064vi3y92u08s FOREIGN KEY (user_user_id) REFERENCES public.users(user_id) ON DELETE CASCADE;


--
-- Name: fooditem fk99dsqbjcoov93nwtdi56435as; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fooditem
    ADD CONSTRAINT fk99dsqbjcoov93nwtdi56435as FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- Name: orders fkag8ppnkjvx255gj7lm3m18wkj; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fkag8ppnkjvx255gj7lm3m18wkj FOREIGN KEY (payment_id) REFERENCES public.payment(payment_id);


--
-- Name: order_details fkajloillm1s39u21t4aki3oxgy; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT fkajloillm1s39u21t4aki3oxgy FOREIGN KEY (order_id_order_id) REFERENCES public.orders(order_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: delivery fkkt5bbmiwyypfnlp9chhnc9qqp; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT fkkt5bbmiwyypfnlp9chhnc9qqp FOREIGN KEY (delivery_guy) REFERENCES public.delivery_guy(delivery_guy_id);


--
-- Name: reviews fklf3o9b470m6g2m5f03vqrbu74; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT fklf3o9b470m6g2m5f03vqrbu74 FOREIGN KEY (user_user_id) REFERENCES public.users(user_id) ON DELETE CASCADE;


--
-- Name: reviews fkq2mr79d7al815vr7javx06lyc; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT fkq2mr79d7al815vr7javx06lyc FOREIGN KEY (order_order_id) REFERENCES public.orders(order_id);


--
-- Name: delivery fku4e8rjwmg09vmas3ccjwglso; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT fku4e8rjwmg09vmas3ccjwglso FOREIGN KEY (order_id) REFERENCES public.orders(order_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

