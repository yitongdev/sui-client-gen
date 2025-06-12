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

export function isItemDelisted(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V35}::kiosk::ItemDelisted` + "<");
}

export interface ItemDelistedFields<T0 extends PhantomTypeArgument> {
  kiosk: ToField<ID>;
  id: ToField<ID>;
}

export type ItemDelistedReified<T0 extends PhantomTypeArgument> = Reified<
  ItemDelisted<T0>,
  ItemDelistedFields<T0>
>;

/**
 * Move struct: `ItemDelisted`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class ItemDelisted<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::kiosk::ItemDelisted`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = ItemDelisted.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::kiosk::ItemDelisted<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = ItemDelisted.$isPhantom;

  readonly kiosk: ToField<ID>;
  readonly id: ToField<ID>;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: ItemDelistedFields<T0>) {
    this.$fullTypeName = composeSuiType(
      ItemDelisted.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::kiosk::ItemDelisted<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.kiosk = fields.kiosk;
    this.id = fields.id;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): ItemDelistedReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: ItemDelisted.$typeName,
      fullTypeName: composeSuiType(
        ItemDelisted.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V35}::kiosk::ItemDelisted<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: ItemDelisted.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => ItemDelisted.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ItemDelisted.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => ItemDelisted.fromBcs(T0, data),
      bcs: ItemDelisted.bcs,
      fromJSONField: (field: any) => ItemDelisted.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => ItemDelisted.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => ItemDelisted.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => ItemDelisted.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => ItemDelisted.fetch(client, T0, id),
      new: (fields: ItemDelistedFields<ToPhantomTypeArgument<T0>>) => {
        return new ItemDelisted([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ItemDelisted.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<ItemDelisted<ToPhantomTypeArgument<T0>>>> {
    return phantom(ItemDelisted.reified(T0));
  }
  static get p() {
    return ItemDelisted.phantom;
  }

  static get bcs() {
    return bcs.struct("ItemDelisted", {
      kiosk: ID.bcs,
      id: ID.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): ItemDelisted<ToPhantomTypeArgument<T0>> {
    return ItemDelisted.reified(typeArg).new({
      kiosk: decodeFromFields(ID.reified(), fields.kiosk),
      id: decodeFromFields(ID.reified(), fields.id),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): ItemDelisted<ToPhantomTypeArgument<T0>> {
    if (!isItemDelisted(item.type)) {
      throw new Error("not a ItemDelisted type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return ItemDelisted.reified(typeArg).new({
      kiosk: decodeFromFieldsWithTypes(ID.reified(), item.fields.kiosk),
      id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): ItemDelisted<ToPhantomTypeArgument<T0>> {
    return ItemDelisted.fromFields(typeArg, ItemDelisted.bcs.parse(data));
  }

  toJSONField() {
    return {
      kiosk: this.kiosk,
      id: this.id,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): ItemDelisted<ToPhantomTypeArgument<T0>> {
    return ItemDelisted.reified(typeArg).new({
      kiosk: decodeFromJSONField(ID.reified(), field.kiosk),
      id: decodeFromJSONField(ID.reified(), field.id),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): ItemDelisted<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== ItemDelisted.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(ItemDelisted.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return ItemDelisted.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): ItemDelisted<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isItemDelisted(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ItemDelisted object`);
    }
    return ItemDelisted.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): ItemDelisted<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isItemDelisted(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ItemDelisted object`);
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

      return ItemDelisted.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ItemDelisted.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<ItemDelisted<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ItemDelisted object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isItemDelisted(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ItemDelisted object`);
    }

    return ItemDelisted.fromSuiObjectData(typeArg, res.data);
  }
}
