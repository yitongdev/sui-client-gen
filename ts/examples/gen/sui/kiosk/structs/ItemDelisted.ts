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

export function isItemDelisted(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::kiosk::ItemDelisted` + "<");
}

export interface ItemDelistedFields<T extends PhantomTypeArgument> {
  kiosk: ToField<ID>;
  id: ToField<ID>;
}

export type ItemDelistedReified<T extends PhantomTypeArgument> = Reified<
  ItemDelisted<T>,
  ItemDelistedFields<T>
>;

/**
 * Move struct: `ItemDelisted`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class ItemDelisted<T extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::kiosk::ItemDelisted`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = ItemDelisted.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::kiosk::ItemDelisted<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = ItemDelisted.$isPhantom;

  readonly kiosk: ToField<ID>;
  readonly id: ToField<ID>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: ItemDelistedFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      ItemDelisted.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::kiosk::ItemDelisted<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.kiosk = fields.kiosk;
    this.id = fields.id;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): ItemDelistedReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: ItemDelisted.$typeName,
      fullTypeName: composeSuiType(
        ItemDelisted.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::kiosk::ItemDelisted<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: ItemDelisted.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        ItemDelisted.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ItemDelisted.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => ItemDelisted.fromBcs(T, data),
      bcs: ItemDelisted.bcs,
      fromJSONField: (field: any) => ItemDelisted.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => ItemDelisted.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ItemDelisted.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ItemDelisted.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        ItemDelisted.fetch(client, T, id),
      new: (fields: ItemDelistedFields<ToPhantomTypeArgument<T>>) => {
        return new ItemDelisted([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ItemDelisted.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<ItemDelisted<ToPhantomTypeArgument<T>>>> {
    return phantom(ItemDelisted.reified(T));
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

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): ItemDelisted<ToPhantomTypeArgument<T>> {
    return ItemDelisted.reified(typeArg).new({
      kiosk: decodeFromFields(ID.reified(), fields.kiosk),
      id: decodeFromFields(ID.reified(), fields.id),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): ItemDelisted<ToPhantomTypeArgument<T>> {
    if (!isItemDelisted(item.type)) {
      throw new Error("not a ItemDelisted type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return ItemDelisted.reified(typeArg).new({
      kiosk: decodeFromFieldsWithTypes(ID.reified(), item.fields.kiosk),
      id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): ItemDelisted<ToPhantomTypeArgument<T>> {
    return ItemDelisted.fromFields(typeArg, ItemDelisted.bcs.parse(data));
  }

  toJSONField() {
    return {
      kiosk: this.kiosk,
      id: this.id,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): ItemDelisted<ToPhantomTypeArgument<T>> {
    return ItemDelisted.reified(typeArg).new({
      kiosk: decodeFromJSONField(ID.reified(), field.kiosk),
      id: decodeFromJSONField(ID.reified(), field.id),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): ItemDelisted<ToPhantomTypeArgument<T>> {
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

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): ItemDelisted<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isItemDelisted(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ItemDelisted object`,
      );
    }
    return ItemDelisted.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): ItemDelisted<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isItemDelisted(data.bcs.type)
      ) {
        throw new Error(`object at is not a ItemDelisted object`);
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

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<ItemDelisted<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ItemDelisted object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isItemDelisted(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ItemDelisted object`);
    }

    return ItemDelisted.fromSuiObjectData(typeArg, res.data);
  }
}
