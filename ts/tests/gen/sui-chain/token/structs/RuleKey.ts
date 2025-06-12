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
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isRuleKey(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::token::RuleKey` + "<");
}

export interface RuleKeyFields<T0 extends PhantomTypeArgument> {
  isProtected: ToField<"bool">;
}

export type RuleKeyReified<T0 extends PhantomTypeArgument> = Reified<
  RuleKey<T0>,
  RuleKeyFields<T0>
>;

/**
 * Move struct: `RuleKey`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class RuleKey<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::token::RuleKey`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = RuleKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::token::RuleKey<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = RuleKey.$isPhantom;

  readonly isProtected: ToField<"bool">;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: RuleKeyFields<T0>) {
    this.$fullTypeName = composeSuiType(
      RuleKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::token::RuleKey<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.isProtected = fields.isProtected;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): RuleKeyReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: RuleKey.$typeName,
      fullTypeName: composeSuiType(
        RuleKey.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::token::RuleKey<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: RuleKey.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => RuleKey.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => RuleKey.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => RuleKey.fromBcs(T0, data),
      bcs: RuleKey.bcs,
      fromJSONField: (field: any) => RuleKey.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => RuleKey.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => RuleKey.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => RuleKey.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => RuleKey.fetch(client, T0, id),
      new: (fields: RuleKeyFields<ToPhantomTypeArgument<T0>>) => {
        return new RuleKey([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RuleKey.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<RuleKey<ToPhantomTypeArgument<T0>>>> {
    return phantom(RuleKey.reified(T0));
  }
  static get p() {
    return RuleKey.phantom;
  }

  static get bcs() {
    return bcs.struct("RuleKey", {
      is_protected: bcs.bool(),
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): RuleKey<ToPhantomTypeArgument<T0>> {
    return RuleKey.reified(typeArg).new({
      isProtected: decodeFromFields("bool", fields.is_protected),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): RuleKey<ToPhantomTypeArgument<T0>> {
    if (!isRuleKey(item.type)) {
      throw new Error("not a RuleKey type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return RuleKey.reified(typeArg).new({
      isProtected: decodeFromFieldsWithTypes("bool", item.fields.is_protected),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): RuleKey<ToPhantomTypeArgument<T0>> {
    return RuleKey.fromFields(typeArg, RuleKey.bcs.parse(data));
  }

  toJSONField() {
    return {
      isProtected: this.isProtected,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): RuleKey<ToPhantomTypeArgument<T0>> {
    return RuleKey.reified(typeArg).new({
      isProtected: decodeFromJSONField("bool", field.isProtected),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): RuleKey<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== RuleKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(RuleKey.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return RuleKey.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): RuleKey<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRuleKey(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a RuleKey object`);
    }
    return RuleKey.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): RuleKey<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isRuleKey(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a RuleKey object`);
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

      return RuleKey.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return RuleKey.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<RuleKey<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching RuleKey object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isRuleKey(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a RuleKey object`);
    }

    return RuleKey.fromSuiObjectData(typeArg, res.data);
  }
}
