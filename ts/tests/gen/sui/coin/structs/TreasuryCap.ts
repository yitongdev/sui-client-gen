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
import { Supply } from "../../balance/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isTreasuryCap(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::coin::TreasuryCap` + "<");
}

export interface TreasuryCapFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  totalSupply: ToField<Supply<T>>;
}

export type TreasuryCapReified<T extends PhantomTypeArgument> = Reified<
  TreasuryCap<T>,
  TreasuryCapFields<T>
>;

/**
 * Move struct: `TreasuryCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class TreasuryCap<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::coin::TreasuryCap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TreasuryCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::coin::TreasuryCap<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = TreasuryCap.$isPhantom;

  readonly id: ToField<UID>;
  readonly totalSupply: ToField<Supply<T>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: TreasuryCapFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      TreasuryCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::coin::TreasuryCap<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.totalSupply = fields.totalSupply;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): TreasuryCapReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: TreasuryCap.$typeName,
      fullTypeName: composeSuiType(
        TreasuryCap.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::coin::TreasuryCap<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: TreasuryCap.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        TreasuryCap.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TreasuryCap.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => TreasuryCap.fromBcs(T, data),
      bcs: TreasuryCap.bcs,
      fromJSONField: (field: any) => TreasuryCap.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => TreasuryCap.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TreasuryCap.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TreasuryCap.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        TreasuryCap.fetch(client, T, id),
      new: (fields: TreasuryCapFields<ToPhantomTypeArgument<T>>) => {
        return new TreasuryCap([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TreasuryCap.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<TreasuryCap<ToPhantomTypeArgument<T>>>> {
    return phantom(TreasuryCap.reified(T));
  }
  static get p() {
    return TreasuryCap.phantom;
  }

  static get bcs() {
    return bcs.struct("TreasuryCap", {
      id: UID.bcs,
      total_supply: Supply.bcs,
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): TreasuryCap<ToPhantomTypeArgument<T>> {
    return TreasuryCap.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      totalSupply: decodeFromFields(
        Supply.reified(typeArg),
        fields.total_supply,
      ),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): TreasuryCap<ToPhantomTypeArgument<T>> {
    if (!isTreasuryCap(item.type)) {
      throw new Error("not a TreasuryCap type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return TreasuryCap.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      totalSupply: decodeFromFieldsWithTypes(
        Supply.reified(typeArg),
        item.fields.total_supply,
      ),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): TreasuryCap<ToPhantomTypeArgument<T>> {
    return TreasuryCap.fromFields(typeArg, TreasuryCap.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      totalSupply: this.totalSupply.toJSONField(),
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
  ): TreasuryCap<ToPhantomTypeArgument<T>> {
    return TreasuryCap.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      totalSupply: decodeFromJSONField(
        Supply.reified(typeArg),
        field.totalSupply,
      ),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): TreasuryCap<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== TreasuryCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(TreasuryCap.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return TreasuryCap.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): TreasuryCap<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTreasuryCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a TreasuryCap object`,
      );
    }
    return TreasuryCap.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): TreasuryCap<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isTreasuryCap(data.bcs.type)) {
        throw new Error(`object at is not a TreasuryCap object`);
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

      return TreasuryCap.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return TreasuryCap.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<TreasuryCap<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching TreasuryCap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isTreasuryCap(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a TreasuryCap object`);
    }

    return TreasuryCap.fromSuiObjectData(typeArg, res.data);
  }
}
