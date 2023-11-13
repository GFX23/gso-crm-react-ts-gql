import type { Order, OrderInput, Customer, ItemInput } from "../types/types";
import { getDb } from "../mongobase/mongoDB";
import { CustomerModel, OrderModel } from "../mongobase/models";
import { measurePerformance } from "../utils/helpers";

const db = getDb();

const Resolvers = {
  Query: {
    getAllCustomers: async (): Promise<Customer[]> => {
      return await measurePerformance("Getting customers", async () => {
        return CustomerModel.find({});
      });
    },

    getCustomer: async (
      _: any,
      args: { id: string }
    ): Promise<Customer | null> => {
      return await measurePerformance(`Found customer ${args.id}`, async () => {
        return CustomerModel.findById(args.id);
      });
    },

    getAllOrders: async (): Promise<Order[]> => {
      return await measurePerformance("Getting orders", async () => {
        return OrderModel.find({});
      });
    },
  },

  // MUTATIONS //

  Mutation: {
    addCustomer: async (
      _: any,
      args: { input: Customer }
    ): Promise<Customer | null> => {
      return await measurePerformance(
        `Customer ${args.input.name} found`,
        async () => {
          return CustomerModel.create(args.input);
        }
      );
    },

    updateOrderDate: async (
      _: any,
      args: { id: string; date: string; until: string }
    ): Promise<Order | null> => {
      return await measurePerformance(`Order ${args.id} date update`, async () => {
        return OrderModel.findByIdAndUpdate(args.id, {
          machining: { date: args.date, until: args.until },
        });
      });
    },

    updateOrderItems: async (
      _: any,
      args: { id: string; item: ItemInput }
    ): Promise<Order | null> => {
      return await measurePerformance(`Order ${args.id} item update`, async () => {
        return OrderModel.findByIdAndUpdate(args.id, { $push: { items: args.item } });
      });
    },

    deleteOrderItem: async (
      _: any,
      args: { id: string; itemId: string }
    ): Promise<Order | null> => {
      return await measurePerformance(`Order ${args.id} item delete`, async () => {
        return OrderModel.findByIdAndUpdate(args.id, { $pull:{items: { _id: args.itemId } } });
      });
    },

    addOrder: (_: any, args: { input: OrderInput }): Order => {
      const newOrder: Order = {
        id: (
          Math.max(...orders.map((order) => parseInt(order.id))) + 1
        ).toString(),
        name: args.input.name,
        customer: args.input.customer,
        delivery: args.input.delivery,
        status: "active",
        price: args.input.price,
        machining: {
          date: args.input.machiningDate,
          until: args.input.machiningUntil,
        },
        operations: [
          {
            type: "welding",
            state: args.input.welding,
            date: args.input.weldingDate,
          },
          {
            type: "heatTreat",
            state: args.input.heatTreat,
            date: args.input.heatTreatDate,
          },
          {
            type: "grinding",
            state: args.input.grinding,
            date: args.input.grindingDate,
          },
          {
            type: "assembly",
            state: args.input.assembly,
            date: args.input.assemblyDate,
          },
          {
            type: "packaging",
            state: args.input.packaging,
            date: args.input.packagingDate,
          },
          {
            type: "shipping",
            state: args.input.shipping,
            date: args.input.shippingDate,
          },
        ],
        items: [
          {
            id: "1-1",
            name: "High-Performance Laptop",
            status: "In Stock",
            price: "1000",
            quantity: "1",
          },
        ],
      };
      orders.push(newOrder);
      return newOrder;
    },
    deleteCustomer: async (
      _: any,
      args: { id: string }
    ): Promise<Customer | null> => {
      return await measurePerformance(
        `Customer ${args.id} deleted`,
        async () => {
          return CustomerModel.findByIdAndDelete(args.id);
        }
      );
    },

    deleteOrder: async (
      _: any,
      args: { id: string }
    ): Promise<Order | null> => {
      return await measurePerformance(`Order ${args.id} deleted`, async () => {
        return OrderModel.findByIdAndDelete(args.id);
      });
    },
  },
};

export default Resolvers;

export let orders: Order[] = [
  {
    id: "1",
    name: "GSO-23-079 - ELEDI Pelton",
    customer: "Eledi Tech s.r.l.",
    delivery: "2023-10-27",
    status: "Active",
    price: "65000",
    machining: { date: "2023-11-16", until: "2023-11-27" },
    operations: [
      { type: "welding", state: false, date: "2023-10-28" },
      { type: "heatTreat", state: false, date: "2023-10-29" },
      { type: "grinding", state: true, date: "2023-10-30" },
      { type: "assembly", state: true, date: "2023-11-01" },
      { type: "packaging", state: true, date: "2023-11-02" },
      { type: "shipping", state: true, date: "2023-11-03" },
    ],
    items: [
      {
        id: "1-1",
        name: "Peltonka",
        status: "Active",
        price: "65000",
        quantity: "1",
      },
      {
        id: "1-1",
        name: "Peltonka",
        status: "Active",
        price: "65000",
        quantity: "1",
      },
      {
        id: "1-1",
        name: "Peltonka",
        status: "Active",
        price: "65000",
        quantity: "1",
      },
      {
        id: "1-1",
        name: "Peltonka",
        status: "Active",
        price: "65000",
        quantity: "1",
      },
      {
        id: "1-1",
        name: "Peltonka",
        status: "Active",
        price: "65000",
        quantity: "1",
      },
    ],
  },
  {
    id: "2",
    name: "GSO-23-080 -  TS INDUSTRY Francis",
    customer: "TS INDUSTRY s.r.o.",
    delivery: "2023-10-28",
    status: "Active",
    price: "45000",
    machining: { date: "2023-11-06", until: "2023-11-17" },
    operations: [
      { type: "welding", state: false, date: "2023-10-29" },
      { type: "heatTreat", state: false, date: "2023-10-30" },
      { type: "grinding", state: true, date: "2023-10-31" },
      { type: "assembly", state: false, date: "2023-11-02" },
      { type: "packaging", state: true, date: "2023-11-03" },
      { type: "shipping", state: false, date: "2023-11-04" },
    ],
    items: [
      {
        id: "2-1",
        name: "Francis Runner",
        status: "In Stock",
        price: "22000",
        quantity: "1",
      },
      {
        id: "2-2",
        name: "Francis Runner",
        status: "In Stock",
        price: "23000",
        quantity: "1",
      },
    ],
  },
  {
    id: "3",
    name: "GSO-23-081 - ANDRITZ Hydro Francis",
    customer: "ANDRITZ HYDRO s.r.o.",
    delivery: "2023-10-29",
    status: "Active",
    price: "1500",
    machining: { date: "2023-11-06", until: "2023-11-08" },
    operations: [
      { type: "welding", state: false, date: "2023-10-30" },
      { type: "heatTreat", state: false, date: "2023-10-31" },
      { type: "grinding", state: false, date: "2023-11-01" },
      { type: "assembly", state: true, date: "2023-11-03" },
      { type: "packaging", state: false, date: "2023-11-04" },
      { type: "shipping", state: true, date: "2023-11-05" },
    ],
    items: [
      {
        id: "3-1",
        name: "Professional Camera",
        status: "In Stock",
        price: "1200",
        quantity: "1",
      },
      {
        id: "3-2",
        name: "Lens Kit",
        status: "In Stock",
        price: "300",
        quantity: "1",
      },
    ],
  },
  {
    id: "4",
    name: "GSO-23-082 - VOITH Hydro Francis",
    customer: "VOITH HYDRO s.r.o.",
    delivery: "2023-10-30",
    status: "Active",
    price: "2000",
    machining: { date: "2023-11-22", until: "2023-11-27" },
    operations: [
      { type: "welding", state: false, date: "2023-10-31" },
      { type: "heatTreat", state: false, date: "2023-11-01" },
      { type: "grinding", state: true, date: "2023-11-02" },
      { type: "assembly", state: false, date: "2023-11-04" },
      { type: "packaging", state: false, date: "2023-11-05" },
      { type: "shipping", state: true, date: "2023-11-06" },
    ],
    items: [
      {
        id: "4-1",
        name: "High-End Gaming PC",
        status: "In Stock",
        price: "1800",
        quantity: "1",
      },
      {
        id: "4-2",
        name: "Gaming Accessories",
        status: "In Stock",
        price: "200",
        quantity: "1",
      },
    ],
  },
  {
    id: "5",
    name: "GSO-23-083 - VOITH Hydro Francis",
    customer: "VOITH HYDRO s.r.o.",
    delivery: "2023-10-31",
    status: "Active",
    price: "500",
    machining: { date: "2023-11-12", until: "2023-11-19" },
    operations: [
      { type: "welding", state: true, date: "2023-11-01" },
      { type: "heatTreat", state: false, date: "2023-11-02" },
      { type: "grinding", state: false, date: "2023-11-03" },
      { type: "assembly", state: false, date: "2023-11-05" },
      { type: "packaging", state: false, date: "2023-11-06" },
      { type: "shipping", state: true, date: "2023-11-07" },
    ],
    items: [
      {
        id: "5-1",
        name: "Home Gym Set",
        status: "In Stock",
        price: "400",
        quantity: "1",
      },
      {
        id: "5-2",
        name: "Fitness Tracker",
        status: "In Stock",
        price: "100",
        quantity: "1",
      },
    ],
  },
  {
    id: "6",
    name: "GSO-23-084 - HPP Francis",
    customer: "HPP Hydro s.r.o.",
    delivery: "2023-11-01",
    status: "Active",
    price: "900",
    machining: { date: "2023-11-02", until: "2023-11-08" },
    operations: [
      { type: "welding", state: false, date: "2023-11-02" },
      { type: "heatTreat", state: false, date: "2023-11-03" },
      { type: "grinding", state: false, date: "2023-11-04" },
      { type: "assembly", state: false, date: "2023-11-06" },
      { type: "packaging", state: false, date: "2023-11-07" },
      { type: "shipping", state: true, date: "2023-11-08" },
    ],
    items: [
      {
        id: "6-1",
        name: "High-End Headphones",
        status: "In Stock",
        price: "800",
        quantity: "1",
      },
      {
        id: "6-2",
        name: "Bluetooth Speakers",
        status: "In Stock",
        price: "100",
        quantity: "1",
      },
    ],
  },
  {
    id: "7",
    name: "GSO-23-085 - MAGNA Přípravek",
    customer: "MAGNA Interior s.r.o.",
    delivery: "2023-11-02",
    status: "Active",
    price: "700",
    machining: { date: "2023-11-20", until: "2023-11-29" },
    operations: [
      { type: "welding", state: false, date: "2023-11-03" },
      { type: "heatTreat", state: false, date: "2023-11-04" },
      { type: "grinding", state: false, date: "2023-11-05" },
      { type: "assembly", state: false, date: "2023-11-07" },
      { type: "packaging", state: false, date: "2023-11-08" },
      { type: "shipping", state: true, date: "2023-11-09" },
    ],
    items: [
      {
        id: "7-1",
        name: "Modern Furniture Set",
        status: "In Stock",
        price: "600",
        quantity: "1",
      },
      {
        id: "7-2",
        name: "Decorative Art Pieces",
        status: "In Stock",
        price: "100",
        quantity: "1",
      },
    ],
  },
];
