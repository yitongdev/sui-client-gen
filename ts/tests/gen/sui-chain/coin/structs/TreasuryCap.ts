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

export interface TreasuryCapFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  totalSupply: ToField<Supply<T0>>;
}

export type TreasuryCapReified<T0 extends PhantomTypeArgument> = Reified<
  TreasuryCap<T0>,
  TreasuryCapFields<T0>
>;

/**
 * Move struct: `TreasuryCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class TreasuryCap<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::coin::TreasuryCap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TreasuryCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::coin::TreasuryCap<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = TreasuryCap.$isPhantom;

  readonly id: ToField<UID>;
  readonly totalSupply: ToField<Supply<T0>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: TreasuryCapFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      TreasuryCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::coin::TreasuryCap<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.totalSupply = fields.totalSupply;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): TreasuryCapReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: TreasuryCap.$typeName,
      fullTypeName: composeSuiType(
        TreasuryCap.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::coin::TreasuryCap<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: TreasuryCap.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        TreasuryCap.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TreasuryCap.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => TreasuryCap.fromBcs(T0, data),
      bcs: TreasuryCap.bcs,
      fromJSONField: (field: any) => TreasuryCap.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => TreasuryCap.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TreasuryCap.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TreasuryCap.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        TreasuryCap.fetch(client, T0, id),
      new: (fields: TreasuryCapFields<ToPhantomTypeArgument<T0>>) => {
        return new TreasuryCap([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TreasuryCap.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<TreasuryCap<ToPhantomTypeArgument<T0>>>> {
    return phantom(TreasuryCap.reified(T0));
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

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): TreasuryCap<ToPhantomTypeArgument<T0>> {
    return TreasuryCap.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      totalSupply: decodeFromFields(
        Supply.reified(typeArg),
        fields.total_supply,
      ),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): TreasuryCap<ToPhantomTypeArgument<T0>> {
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

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): TreasuryCap<ToPhantomTypeArgument<T0>> {
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

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): TreasuryCap<ToPhantomTypeArgument<T0>> {
    return TreasuryCap.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      totalSupply: decodeFromJSONField(
        Supply.reified(typeArg),
        field.totalSupply,
      ),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): TreasuryCap<ToPhantomTypeArgument<T0>> {
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

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): TreasuryCap<ToPhantomTypeArgument<T0>> {
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

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): TreasuryCap<ToPhantomTypeArgument<T0>> {
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
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
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

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<TreasuryCap<ToPhantomTypeArgument<T0>>> {
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
