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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isItemPurchased(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::kiosk::ItemPurchased` + "<");
}

export interface ItemPurchasedFields<T extends PhantomTypeArgument> {
  kiosk: ToField<ID>;
  id: ToField<ID>;
  price: ToField<"u64">;
}

export type ItemPurchasedReified<T extends PhantomTypeArgument> = Reified<
  ItemPurchased<T>,
  ItemPurchasedFields<T>
>;

/**
 * Move struct: `ItemPurchased`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class ItemPurchased<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::kiosk::ItemPurchased`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = ItemPurchased.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::kiosk::ItemPurchased<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = ItemPurchased.$isPhantom;

  readonly kiosk: ToField<ID>;
  readonly id: ToField<ID>;
  readonly price: ToField<"u64">;

  private constructor(typeArgs: [PhantomToTypeStr<T>], fields: ItemPurchasedFields<T>) {
    this.$fullTypeName = composeSuiType(
      ItemPurchased.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::kiosk::ItemPurchased<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.kiosk = fields.kiosk;
    this.id = fields.id;
    this.price = fields.price;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): ItemPurchasedReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: ItemPurchased.$typeName,
      fullTypeName: composeSuiType(
        ItemPurchased.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::kiosk::ItemPurchased<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
      isPhantom: ItemPurchased.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => ItemPurchased.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ItemPurchased.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => ItemPurchased.fromBcs(T, data),
      bcs: ItemPurchased.bcs,
      fromJSONField: (field: any) => ItemPurchased.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => ItemPurchased.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) => ItemPurchased.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) => ItemPurchased.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) => ItemPurchased.fetch(client, T, id),
      new: (fields: ItemPurchasedFields<ToPhantomTypeArgument<T>>) => {
        return new ItemPurchased([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ItemPurchased.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<ItemPurchased<ToPhantomTypeArgument<T>>>> {
    return phantom(ItemPurchased.reified(T));
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

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): ItemPurchased<ToPhantomTypeArgument<T>> {
    return ItemPurchased.reified(typeArg).new({
      kiosk: decodeFromFields(ID.reified(), fields.kiosk),
      id: decodeFromFields(ID.reified(), fields.id),
      price: decodeFromFields("u64", fields.price),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): ItemPurchased<ToPhantomTypeArgument<T>> {
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

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): ItemPurchased<ToPhantomTypeArgument<T>> {
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

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): ItemPurchased<ToPhantomTypeArgument<T>> {
    return ItemPurchased.reified(typeArg).new({
      kiosk: decodeFromJSONField(ID.reified(), field.kiosk),
      id: decodeFromJSONField(ID.reified(), field.id),
      price: decodeFromJSONField("u64", field.price),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): ItemPurchased<ToPhantomTypeArgument<T>> {
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

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): ItemPurchased<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isItemPurchased(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ItemPurchased object`);
    }
    return ItemPurchased.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): ItemPurchased<ToPhantomTypeArgument<T>> {
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

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<ItemPurchased<ToPhantomTypeArgument<T>>> {
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
