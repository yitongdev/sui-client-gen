import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { PKG_V35 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isItemPurchased(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V35}::kiosk::ItemPurchased` + "<");
}

export interface ItemPurchasedFields<T0 extends PhantomTypeArgument> {
  kiosk: ToField<ID>;
  id: ToField<ID>;
  price: ToField<"u64">;
}

export type ItemPurchasedReified<T0 extends PhantomTypeArgument> = Reified<
  ItemPurchased<T0>,
  ItemPurchasedFields<T0>
>;

/**
 * Move struct: `ItemPurchased`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class ItemPurchased<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::kiosk::ItemPurchased`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = ItemPurchased.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::kiosk::ItemPurchased<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = ItemPurchased.$isPhantom;

  readonly kiosk: ToField<ID>;
  readonly id: ToField<ID>;
  readonly price: ToField<"u64">;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: ItemPurchasedFields<T0>) {
    this.$fullTypeName = composeSuiType(
      ItemPurchased.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::kiosk::ItemPurchased<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.kiosk = fields.kiosk;
    this.id = fields.id;
    this.price = fields.price;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): ItemPurchasedReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: ItemPurchased.$typeName,
      fullTypeName: composeSuiType(
        ItemPurchased.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V35}::kiosk::ItemPurchased<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: ItemPurchased.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => ItemPurchased.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ItemPurchased.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => ItemPurchased.fromBcs(T0, data),
      bcs: ItemPurchased.bcs,
      fromJSONField: (field: any) => ItemPurchased.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => ItemPurchased.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => ItemPurchased.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => ItemPurchased.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => ItemPurchased.fetch(client, T0, id),
      new: (fields: ItemPurchasedFields<ToPhantomTypeArgument<T0>>) => {
        return new ItemPurchased([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ItemPurchased.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<ItemPurchased<ToPhantomTypeArgument<T0>>>> {
    return phantom(ItemPurchased.reified(T0));
  }
  static get p() {
    return ItemPurchased.phantom;
  }

  static get bcs() {
    return bcs.struct("ItemPurchased", {
      kiosk: ID.bcs,
      id: ID.bcs,
      price: bcs.u64(),
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): ItemPurchased<ToPhantomTypeArgument<T0>> {
    return ItemPurchased.reified(typeArg).new({
      kiosk: decodeFromFields(ID.reified(), fields.kiosk),
      id: decodeFromFields(ID.reified(), fields.id),
      price: decodeFromFields("u64", fields.price),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): ItemPurchased<ToPhantomTypeArgument<T0>> {
    if (!isItemPurchased(item.type)) {
      throw new Error("not a ItemPurchased type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return ItemPurchased.reified(typeArg).new({
      kiosk: decodeFromFieldsWithTypes(ID.reified(), item.fields.kiosk),
      id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
      price: decodeFromFieldsWithTypes("u64", item.fields.price),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): ItemPurchased<ToPhantomTypeArgument<T0>> {
    return ItemPurchased.fromFields(typeArg, ItemPurchased.bcs.parse(data));
  }

  toJSONField() {
    return {
      kiosk: this.kiosk,
      id: this.id,
      price: this.price.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): ItemPurchased<ToPhantomTypeArgument<T0>> {
    return ItemPurchased.reified(typeArg).new({
      kiosk: decodeFromJSONField(ID.reified(), field.kiosk),
      id: decodeFromJSONField(ID.reified(), field.id),
      price: decodeFromJSONField("u64", field.price),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): ItemPurchased<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== ItemPurchased.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(ItemPurchased.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return ItemPurchased.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): ItemPurchased<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isItemPurchased(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ItemPurchased object`);
    }
    return ItemPurchased.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): ItemPurchased<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isItemPurchased(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ItemPurchased object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return ItemPurchased.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ItemPurchased.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<ItemPurchased<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ItemPurchased object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isItemPurchased(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ItemPurchased object`);
    }

    return ItemPurchased.fromSuiObjectData(typeArg, res.data);
  }
}
