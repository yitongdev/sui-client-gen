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

export interface RuleKeyFields<T extends PhantomTypeArgument> {
  isProtected: ToField<"bool">;
}

export type RuleKeyReified<T extends PhantomTypeArgument> = Reified<
  RuleKey<T>,
  RuleKeyFields<T>
>;

/**
 * Move struct: `RuleKey`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class RuleKey<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::token::RuleKey`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = RuleKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::token::RuleKey<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = RuleKey.$isPhantom;

  readonly isProtected: ToField<"bool">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: RuleKeyFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      RuleKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::token::RuleKey<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.isProtected = fields.isProtected;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): RuleKeyReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: RuleKey.$typeName,
      fullTypeName: composeSuiType(
        RuleKey.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::token::RuleKey<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: RuleKey.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        RuleKey.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        RuleKey.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => RuleKey.fromBcs(T, data),
      bcs: RuleKey.bcs,
      fromJSONField: (field: any) => RuleKey.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => RuleKey.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        RuleKey.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        RuleKey.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        RuleKey.fetch(client, T, id),
      new: (fields: RuleKeyFields<ToPhantomTypeArgument<T>>) => {
        return new RuleKey([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RuleKey.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<RuleKey<ToPhantomTypeArgument<T>>>> {
    return phantom(RuleKey.reified(T));
  }
  static get p() {
    return RuleKey.phantom;
  }

  static get bcs() {
    return bcs.struct("RuleKey", {
      is_protected: bcs.bool(),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): RuleKey<ToPhantomTypeArgument<T>> {
    return RuleKey.reified(typeArg).new({
      isProtected: decodeFromFields("bool", fields.is_protected),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): RuleKey<ToPhantomTypeArgument<T>> {
    if (!isRuleKey(item.type)) {
      throw new Error("not a RuleKey type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return RuleKey.reified(typeArg).new({
      isProtected: decodeFromFieldsWithTypes("bool", item.fields.is_protected),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): RuleKey<ToPhantomTypeArgument<T>> {
    return RuleKey.fromFields(typeArg, RuleKey.bcs.parse(data));
  }

  toJSONField() {
    return {
      isProtected: this.isProtected,
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
  ): RuleKey<ToPhantomTypeArgument<T>> {
    return RuleKey.reified(typeArg).new({
      isProtected: decodeFromJSONField("bool", field.isProtected),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): RuleKey<ToPhantomTypeArgument<T>> {
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

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): RuleKey<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRuleKey(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a RuleKey object`,
      );
    }
    return RuleKey.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): RuleKey<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isRuleKey(data.bcs.type)) {
        throw new Error(`object at is not a RuleKey object`);
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

      return RuleKey.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return RuleKey.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<RuleKey<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching RuleKey object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isRuleKey(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a RuleKey object`);
    }

    return RuleKey.fromSuiObjectData(typeArg, res.data);
  }
}
