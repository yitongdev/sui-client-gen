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
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isRewardBalance(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::liquidity_mining::RewardBalance` + "<");
}

export interface RewardBalanceFields<T0 extends PhantomTypeArgument> {
  dummyField: ToField<"bool">;
}

export type RewardBalanceReified<T0 extends PhantomTypeArgument> = Reified<
  RewardBalance<T0>,
  RewardBalanceFields<T0>
>;

/**
 * Move struct: `RewardBalance`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class RewardBalance<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquidity_mining::RewardBalance`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = RewardBalance.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquidity_mining::RewardBalance<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = RewardBalance.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: RewardBalanceFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      RewardBalance.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquidity_mining::RewardBalance<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): RewardBalanceReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: RewardBalance.$typeName,
      fullTypeName: composeSuiType(
        RewardBalance.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::liquidity_mining::RewardBalance<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: RewardBalance.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        RewardBalance.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        RewardBalance.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => RewardBalance.fromBcs(T0, data),
      bcs: RewardBalance.bcs,
      fromJSONField: (field: any) => RewardBalance.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => RewardBalance.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        RewardBalance.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        RewardBalance.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        RewardBalance.fetch(client, T0, id),
      new: (fields: RewardBalanceFields<ToPhantomTypeArgument<T0>>) => {
        return new RewardBalance([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RewardBalance.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<RewardBalance<ToPhantomTypeArgument<T0>>>> {
    return phantom(RewardBalance.reified(T0));
  }
  static get p() {
    return RewardBalance.phantom;
  }

  static get bcs() {
    return bcs.struct("RewardBalance", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): RewardBalance<ToPhantomTypeArgument<T0>> {
    return RewardBalance.reified(typeArg).new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): RewardBalance<ToPhantomTypeArgument<T0>> {
    if (!isRewardBalance(item.type)) {
      throw new Error("not a RewardBalance type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return RewardBalance.reified(typeArg).new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): RewardBalance<ToPhantomTypeArgument<T0>> {
    return RewardBalance.fromFields(typeArg, RewardBalance.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
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
  ): RewardBalance<ToPhantomTypeArgument<T0>> {
    return RewardBalance.reified(typeArg).new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): RewardBalance<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== RewardBalance.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(RewardBalance.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return RewardBalance.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): RewardBalance<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRewardBalance(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a RewardBalance object`,
      );
    }
    return RewardBalance.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): RewardBalance<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isRewardBalance(data.bcs.type)
      ) {
        throw new Error(`object at is not a RewardBalance object`);
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

      return RewardBalance.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return RewardBalance.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<RewardBalance<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching RewardBalance object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isRewardBalance(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a RewardBalance object`);
    }

    return RewardBalance.fromSuiObjectData(typeArg, res.data);
  }
}
